reduce实现多个promise顺序执行.

```js
const promiseSeries = (tasks: Function[], iterator: Function ) => {
	return tasks.reduce((promise, task) => {
		return promise.then(() => iterator(task))
	}, Promise.resolve())
}

export { promiseSeries }

```

`test`
```js
import { promiseSeries } from ".";
import { delay } from "helper";

const tasks = [
	() => delay(1000, 1),
	() => delay(2000, 2),
	() => delay(3000, 3),
]

promiseSeries(tasks, task => {
	Promise.resolve(task).then(async t => {
		console.count('zou')
		return t()
	})
}).then(res2 => {
	console.log('res2', res2)
})


```