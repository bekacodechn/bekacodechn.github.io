# 策略模式

## 设计思想

定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。

详细解释: 定义一系列的算法，把它们各自封装成策略类，算法被封装在策略类内部的方法里。在客户对 Context 发起请求的时，Context 总是把请求委托给这些策略对象中间的某一个进行计算。


优点:
1. 策略模式利用组合、委托和多态等技术和思想，可以有效地避免多重条件选择语句。
2. 策略模式提供了对开放—封闭原则的完美支持，将算法封装在独立的strategy中，使得它们易于切换，易于理解，易于扩展。
3. 策略模式中的算法也可以复用在系统的其他地方，从而避免许多重复的复制粘贴工作。
4. 在策略模式中利用组合和委托来让Context拥有执行算法的能力，这也是继承的一种更轻便的替代方案。

## 例子

### 1. 计算最终薪水
一个公司的绩效、基本工资都是变化的，可作为策略，`calculate`扮演`Context`分发不同策略。

```js
// 公司A绩效计算方式
const companyA = {
	S(salary) {
		return salary * 4
	},
	A(salary) {
		return salary * 3
	},
	B(salary) {
		return salary * 2
	},
}
// 公司B绩效计算方式
const companyB = {
	S(salary) {
		return salary * 7
	},
	A(salary) {
		return salary * 6
	},
	B(salary) {
		return salary * 5
	},
}

// 根据 公司/绩效/基本工资 计算最终薪水,而这三个要素均可替换
const calculate = (company, level, salary) => {
	return company[level](salary)
}

/**
 * 所有跟计算奖金有关的逻辑不再放在Context中，而是分布在各个策略对象中。Context并没有计算奖金的能力，
 * 而是把这个职责委托给了某个策略对象。每个策略对象负责的算法已被各自封装在对象内部。当我们对这些策略对象发出“计算奖金”的请求时，
 * 它们会返回各自不同的计算结果，这正是对象多态性的体现，也是“它们可以相互替换”的目的。替换Context中当前保存的策略对象，便能执行不同的算法来得到我们想要的结果。
 *
 * 策略对象: companyA和companyB
 * Context: calculate方法
 */
const result = calculate(companyB, 'A', 1000)
console.log('result', result)
```

### 2.小球的动画

小球的动画效果多种多样，可作为策略使用

`index.js`
```js
// 动画算法策略
var tween = {
	linear: function (t, b, c, d) {
		return (c * t) / d + b;
	},
	easeIn: function (t, b, c, d) {
		return c * (t /= d) * t + b;
	},
	strongEaseIn: function (t, b, c, d) {
		return c * (t /= d) * t * t * t * t + b;
	},
	strongEaseOut: function (t, b, c, d) {
		return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
	},
	sineaseIn: function (t, b, c, d) {
		return c * (t /= d) * t * t + b;
	},
	sineaseOut: function (t, b, c, d) {
		return c * ((t = t / d - 1) * t * t + 1) + b;
	},
};

class Animate {
	constructor(dom) {
		this.dom = dom; // 进行运动的dom 节点
		this.startTime = 0; // 动画开始时间
		this.startPos = 0; // 动画开始时，dom 节点的位置，即dom 的初始位置
		this.endPos = 0; // 动画结束时，dom 节点的位置，即dom 的目标位置
		this.propertyName = null; // dom 节点需要被改变的css 属性名
		this.easing = null; // 缓动算法
		this.duration = null; // 动画持续时间
	}

	start(propertyName, endPos, duration, easing) {
		this.startTime = +new Date(); // 动画启动时间
		this.startPos = this.dom.getBoundingClientRect()[propertyName]; // dom 节点初始位置
		this.propertyName = propertyName; // dom 节点需要被改变的CSS 属性名
		this.endPos = endPos; // dom 节点目标位置
		this.duration = duration; // 动画持续事件
		this.easing = tween[easing]; // 缓动算法
		var self = this;
		var timeId = setInterval(function () {
			// 启动定时器，开始执行动画
			if (self.step() === false) {
				// 如果动画已结束，则清除定时器
				clearInterval(timeId);
			}
		}, 16);
	}

	step() {
		var t = +new Date(); // 取得当前时间
		if (t >= this.startTime + this.duration) {
			// (1)
			this.update(this.endPos); // 更新小球的最终位置
			return false;
		}
		var pos = this.easing(
			t - this.startTime, // 动画持续了多长时间
			this.startPos, // 开始位置
			this.endPos - this.startPos, // 小球移动距离
			this.duration // 总的持续时间
		);
		// pos 为小球当前位置
		this.update(pos); // 更新小球的CSS 属性值
	}

	update(pos) {
		this.dom.style[this.propertyName] = pos + "px";
	}
}

var div = document.getElementById("div");
var animate = new Animate(div);
// 将不同动画策略传进去
animate.start("left", 500, 1000, "strongEaseOut");

```

`index.html`
```html
<body>
	<div style="position:absolute;background:blue" id="div">我是div</div>
	<script src="./index.js"></script>
</body>
```

### 表单验证
初级表单验证的写法：
```html
<html>
<body>
	<form action="http:// xxx.com/register" id="registerForm" method="post">
		请输入用户名：<input type="text" name="userName"/ >
		请输入密码：<input type="text" name="password"/ >

		请输入手机号码：<input type="text" name="phoneNumber"/ >
		<button>提交</button>
	</form>
	<script>
		var registerForm = document.getElementById( 'registerForm' );
		registerForm.onsubmit = function(){
			if ( registerForm.userName.value === '' ){
				alert ( '用户名不能为空' );
				return false;
			}
			if ( registerForm.password.value.length < 6 ){
				alert ( '密码长度不能少于6 位' );
				return false;
			}
			if ( !/(^1[3|5|8][0-9]{9}$)/.test( registerForm.phoneNumber.value ) ){
				alert ( '手机号码格式不正确' );
				return false;
			}
		}
	</script>
</body>
</html>
```

这种写法有以下缺点： 函数体比较庞大、缺乏弹性、无法复用。

使用策略模式重构表单：

```js
<html>

<body>
  <form action="http:// xxx.com/register" id="registerForm" method="post">
    请输入用户名：<input type="text" name="userName" />
    请输入密码：<input type="text" name="password" />
    请输入手机号码：<input type="text" name="phoneNumber" />
    <button>提交</button>
  </form>
  <script>
    /***********************策略对象**************************/
    var strategies = {
      isNonEmpty: function (value, errorMsg) {
        if (value === '') {
          return errorMsg;
        }
      },
      minLength: function (value, length, errorMsg) {
        if (value.length < length) {
          return errorMsg;
        }
      }
    };
    /***********************Validator 类**************************/
    class Validator {
      constructor() {
        this.cache = []
      }

      add(dom, rules) {
        rules.forEach(rule => {
          const { strategy, errorMsg } = rule
          const [checkFn, arg] = strategy.split(':')
          const checkFnArgs = [dom.value, arg, errorMsg].filter(arg => arg !== undefined)
          this.cache.push(() => {
            return strategies[checkFn].apply(dom, checkFnArgs)
          })
        })
      }

      start() {
        for (let i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
          let errorMsg = validatorFunc();
          if (errorMsg) {
            return errorMsg;
          }
        }
      }
    }

    /***********************客户调用代码**************************/
    const registerForm = document.getElementById('registerForm');
    const validateFn = function () {
      const validator = new Validator();
      // 验证用户名
      validator.add(registerForm.userName, [{
        strategy: 'isNonEmpty',
        errorMsg: '用户名不能为空'
      }, {
        strategy: 'minLength:6',
        errorMsg: '用户名长度不能小于10 位'
      }]);
      // 验证密马
      validator.add(registerForm.password, [
        {
          strategy: 'minLength:6',
          errorMsg: '密码长度不能小于6 位'
        }]);
      const errorMsg = validator.start();
      return errorMsg;
    }
    registerForm.onsubmit = function () {
      const errorMsg = validateFn();
      if (errorMsg) {
        alert(errorMsg);
        return false;
      }

    };
  </script>
</body>

</html
```