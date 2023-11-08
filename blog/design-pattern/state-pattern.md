# 状态模式

## 电灯状态（带有顺序）
电灯有三种状态：弱光、强光、关闭。应用状态模式将状态保存在各自的类里，并指明下一个状态是什么
```js
class Light {
  // 保存所有状态的引用
  constructor() {
    this.off = new Off(this)
    this.weak = new Weak(this)
    this.strong = new Strong(this)
  }

  setState(state) {
    this.state = state
  }

  // next接口要和Off、Weak、Strong统一
  next() {
    this.state.next()
  }
}

// 约束电灯状态类必须实现next接口
class LightState {
  next() {
    throw new Error(`${this.constructor.name} 类必须实现next接口`)
  }
}

class Off extends LightState{
  constructor(light) {
    super()
    this.light = light
  }
  next() {
    console.log('weak');
    this.light.setState(this.light.weak)
  }
}
class Weak extends LightState{
  constructor(light) {
    super()
    this.light = light
  }
  next() {
    console.log('strong');
    this.light.setState(this.light.strong)
  }
}
class Strong extends LightState{
  constructor(light) {
    super()
    this.light = light
  }
  next() {
    console.log('off');
    this.light.setState(this.light.off)
  }
}

const light = new Light()
light.setState(light.off)
light.next()
light.next()
light.next()
light.next(
```