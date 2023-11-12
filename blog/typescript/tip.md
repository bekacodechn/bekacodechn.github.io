# Typescript 技巧


`metadata:`

**原标题:** 巧用 Typescript

**链接:** https://zhuanlan.zhihu.com/p/39620591

---

## 巧用注释

```typescript
/** 显示注释 */
interface Person {
  /** 显示注释 */
  name: string,
  // 没有注释
  age: number;
}
```

通过/** */形式的注释可以给 TS 类型做标记，编辑器会有更好的提示; 但用 // 不会有注释

![20231112181006](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112181006.png)

## 巧用注释 进阶

注释有很多规范的字段，基本和 JSDOC 一致。但不用着急翻文档，在 /** */ 里输入 @ 就可以看到丰富的选择：

![20231112181901](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112181901.png)

## 巧用 typeof

我们一般先写类型，再使用

```typescript
interface Opt {
  timeout: number
}
const defaultOption: Opt = {
  timeout: 500
}
```
有时候可以反过来：

```typescript
const defaultOption = {
  timeout: 500
}
type Opt = typeof defaultOption
```

当一个 interface 总有一个字面量初始值时，可以考虑这种写法以减少重复代码。

## 巧用联合类型

Dinner 要么有 fish 要么有 bear 。

```typescript
//   Not good.
interface Dinner1 {
  fish?: number,
  bear?: number,
}

//   Awesome!
type Dinner2 = {
  fish: number,
} | {
  bear: number,
}
```

一些区别：

```typescript
let d1: Dinner1 = {}  // Opps
d1 = {fish:1, bear:1} // Opps

let d2: Dinner2 = {}  // Protected!
d2 = {fish:1, bear:1} // Protected!

if ('fish' in d2) {
  // `d2` has `fish` and no `bear` here.
} else {
  // `d2` has `bear` and no `fish` here.
}
```

## 巧用查找类型

```typescript
interface Person {
  addr: {
    city: string,
    street: string,
    num: number,
  }
}
```

当需要使用 `addr` 的类型时，除了把类型提出来

```typescript
interface Address {
  city: string,
  street: string,
  num: number,
}
interface Person {
  addr: Address,
}
```

还可以

```typescript
Person["addr"] // This is Address.
```

## 巧用查找类型+泛型+keyof

```typescript
interface API {
  '/user': { name: string },
  '/menu': { foods: Food[] },
}
const get = <URL extends keyof API>(url: URL): Promise<API[URL]> => {
  return fetch(url).then(res => res.json())
}
```

上面的定义极大地增强了代码提示：

![20231112182426](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112182426.png)

![20231112182449](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112182449.png)

## 巧用显式泛型

`$('button')` 是个 DOM 元素选择器，可是返回值的类型是运行时才能确定的，除了返回 `any` ，还可以

```typescript
function $<T extends HTMLElement>(id: string):T {
  return document.getElementById(id)
}

// Tell me what element it is.
$<HTMLInputElement>('input').value
```
函数泛型不一定非得自动推导出类型，有时候显式指定类型就好。

## 巧用 DeepReadonly

```typescript
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
}

const a = { foo: { bar: 22 } }
const b = a as DeepReadonly<typeof a>
b.foo.bar = 33 // Hey, stop!
```
## 巧用 Omit

```typescript
import { Button, ButtonProps } from './components/button'

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>
type BigButtonProps = Omit<ButtonProps, 'size'>

function BigButton(props: BigButtonProps) {
  return Button({ ...props, size: 'big' })
}
```
高阶组件比较常用。

## 巧用Record类型

业务中，我们经常会写枚举和对应的映射:

```typescript
type AnimalType = 'cat' | 'dog' | 'frog';
const AnimalMap = {
  cat: { name: '猫', icon: ' '},
  dog: { name: '狗', icon: ' ' },
  forg: { name: '蛙', icon: ' ' },
};
```

注意到上面 forg 拼错了吗？

`Record` 可以保证映射完整:

```typescript
type AnimalType = 'cat' | 'dog' | 'frog';
interface AnimalDescription { name: string, icon: string }
const AnimalMap: Record<AnimalType, AnimalDescription> = {
  cat: { name: '猫', icon: ' '},
  dog: { name: '狗', icon: ' ' },
  forg: { name: '蛙', icon: ' ' }, // Hey!
};
```

还能有代码提示

![20231112183227](https://blog-1318409910.cos.ap-beijing.myqcloud.com/blog/20231112183227.png)

如果你喜欢用 enum ，写法也一样的

```typescript
enum AnimalType {
  CAT = 'cat',
  DOG = 'dog',
  FROG = 'frog',
}
const AnimalMap: Record<AnimalType, AnimalDescription>
```

## 巧用tsx+extends

在 `.tsx` 文件里，泛型可能会被当做 jsx 标签

```typescript
const toArray = <T>(element: T) => [element]; // Error in .tsx file.
```

加 `extends` 可破

```typescript
const toArray = <T extends {}>(element: T) => [element]; // No errors.
```

## 巧用ClassOf

有时候，我们要传入类本身，而不是类的实例

```typescript
abstract class Animal extends React.PureComponent {
  /* Common methods here. */
}
class Cat extends Animal {}
class Dog extends Animal {}

// `AnimalComponent` must be a class of Animal.
const renderAnimal = (AnimalComponent: Animal) => {
  return <AnimalComponent/>; // WRONG!
}
```

上面的代码是错的，因为 `Animal` 是实例类型，不是类本身。应该

```typescript
interface ClassOf<T> {
  new (...args: any[]): T;
}
const renderAnimal = (AnimalComponent: ClassOf<Animal>) => {
  return <AnimalComponent/>; // Good!
}

renderAnimal(Cat); // Good!
renderAnimal(Dog); // Good!
```

## 巧用类型查找+类方法

我们通常会在 React 组件中把方法传下去

```typescript
class Parent extends React.PureComponent {
  private updateHeader = (title: string, subTitle: string) => {
    // Do it.
  };
  render() {
    return <Child updateHeader={this.updateHeader}/>;
  }
}

interface ChildProps {
  updateHeader: (title: string, subTitle: string) => void;
}
class Child extends React.PureComponent<ChildProps> {
  private onClick = () => {
    this.props.updateHeader('Hello', 'Typescript');
  };
  render() {
    return <button onClick={this.onClick}>Go</button>;
  }
}
```

其实可以在 `ChildProps` 中直接引用类的方法

```typescript
interface ChildProps {
  updateHeader: Parent['updateHeader'];
}
```

两个好处：不用重复写方法签名，能从方法调用跳到方法定义，而不是类型声明 。

## 巧用 as const

```typescript
const fetchOption = {
  mode: 'same-origin',
  credentials: 'include',
};

fetch('/api', fetchOption); // Error!
```

这因为 `mode` 的类型被推导为 `string` 而不是 `'same-origin'` ，`credentials` 同理。  
推荐的做法是声明合理的类型：

```typescript
const fetchOptions: RequestInit = {
  mode: 'same-origin',
  credentials: 'include',
};

```

如果要的类型很难取到，可以

```typescript
const fetchOptions = {
  mode: 'same-origin' as const,
  credentials: 'include' as const,
};

// Or
const fetchOptions = {
  mode: 'same-origin',
  credentials: 'include',
} as const;
```

详见 [const assertions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html%23const-assertions)

## 巧用 \[a, b\] as const

`React.useState()` 返回 `[state, setState]` 的结构，方便调用方解构和命名：

```typescript
const [title, setTitle] = React.useState();
```

这是一种很棒的设计，我们也效仿的话：

```typescript
const makeGetSet = (initialValue: string) => {
  let value = initialValue;
  const setValue = (v: string) => value = v;
  const getValue = () => value;
  return [getValue, setValue];
};

const [getName, setName] = makeGetSet('14');
const currentName = getName(); // Error! But why?
```

原因是 `[0, '']` 会被推导为类型 `(number | string)[]` 。加 `as const` 可推断为元组：

:::tip
从哪里得出的`[0, '']`? 结果是正确的，确实起作用
:::

```typescript
const toGetSet = (initialValue: string) => {
  let value = initialValue;
  const setValue = (v: string) => value = v;
  const getValue = () => value;
  return [getValue, setValue] as const;
};

const [getName, setName] = toGetSet('14');
const currentName = getName(); // Great!
```

业务中，自定义 hook 比较多用：

```typescript
const useFlag = (initialValue = false) => {
  const [flag, setFlag] = React.useState(initialValue);
  const up = React.useCallback(() => setFlag(true), []);
  const down = React.useCallback(() => setFlag(false), []);
  return [flag, up, down] as const;
};

const [modalVisible, showModal, hideModal] = useFlag();
```

## 巧用 is

类型收窄（Type guard）

```typescript
const isNumberArray = (arr: unknown): arr is number[] => {
  return Array.isArray(arr) && arr.every(value => typeof value === 'number');
};
```

## 巧用 @ts-expect-error

还是类型收窄。  
你和同事 Bob 友好地约定了一个接口：

```typescript
type Task = {
  status: 'processing';
  progress: number;
} | {
  status: 'done';
  result: string;
};
```

不过说实话，你并不信任他：

```typescript
const handleTask = (task: Task) => {
  if (task.status === 'processing') { /* Show progress. */ return; }
  if (task.status === 'done') { /* Show result. */ return; }

  //   Defense!
  window.alert(`Wrong task status: ${task.status}! Go ask Bob!`);
};
```

可惜最后一行报错了，因为类型收窄后 `task` 的类型为 `never` 。这是合理的。  
你可能会考虑用 `ts-ignore` 或 `as any` ，但其实 `ts-expect-error` 更合适：

```typescript
const handleTask = (task: Task) => {
  if (task.status === 'processing') { /* Show progress. */ return; }
  if (task.status === 'done') { /* Show result. */ return; }

  //   Defense!
  // @ts-expect-error Expect `task` to be never.
  window.alert(`Wrong task status: ${task.status}! Go ask Bob!`);
};

```

当以后添加 status 时，`@ts-expect-error` 处会报错，提醒你处理新增的 status ：

```typescript
type Task = ... | { status: 'paused' };

const handleTask = (task: Task) => {
  if (task.status === 'processing') { /* Show progress. */ return; }
  if (task.status === 'done') { /* Show result. */ return; }

  //   Defense!
  // @ts-expect-error Expect `task` to be never. //   Error.
  window.alert(`Wrong task status: ${task.status}! Go ask Bob!`);
};
```

## 巧用 \[number\] 下标

通常，我们会定义一些枚举：

```typescript
type Drink = 'Beer' | 'Wine' | 'Water';
```

以及一个全量的数组，和一个阻止酒吧爆炸的方法：

```typescript
const DRINK_LIST: Drink[] = ['Beer', 'Wine', 'Water'];

const checkDrink = (drink: any): drink is Drink => {
  return DRINK_LIST.includes(drink);
};
```

但这并不能保证 `DRINK_LIST` 是枚举值的全量列表：

```typescript
const DRINK_LIST: Drink[] = ['Beer', 'Wine']; // Oh, I forgot water!
```

或许有某种技巧能定义出期望的全量列表元组。
但这里提供一种简便的写法 —— 先定义全量列表，再获取枚举类型：

```typescript
const DRINK_LIST = ['Beer', 'Wine', 'Water'] as const;
type Drink = (typeof DRINK_LIST)[number]; // Equals to 'Beer' | 'Wine' | 'Water'.
```

详见 [indexed-access-types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html) 。

## 巧用 Omit + &

有时候，我们希望“继承”一个类型，并且“重写”其中一些属性：

```typescript
type Base = {
  foo: number;
  bar: number;
};

// ❌ Interface 'A' incorrectly extends interface 'Base'.
interface A extends Base {
  foo: string;
};

// ❌ B['foo'] is never.
type B = Base & {
  foo: string;
};
```

可以先 Omit 掉：

```typescript
interface C extends Omit<Base, 'foo'> {
  foo: string;
};

type D = Omit<Base, 'foo'> & {
  foo: string;
};
```

详见 [Omit](https://www.typescriptlang.org/docs/handbook/utility-types.html%23omittype-keys)。

## Simplify
不太行。
