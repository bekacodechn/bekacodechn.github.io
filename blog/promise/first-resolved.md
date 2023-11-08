顺序执行任务直到第一个resolved。

```js
const promiseFirst = async(tasks: Function[], errors: Error[] = []) => {
	if (tasks.length === 0) {
		throw new Error(`errors-length: ${errors.length}\n${errors.join('\n')}`)
	}
	const [ task, ...rest ] = tasks
	try {
		return await task()
	} catch(error) {
		return promiseFirst(rest, [...errors, error])
	}
}

export { promiseFirst }

```

`test`
```js
import { promiseFirst } from "./index";
import { delay, logTime } from "helper";

const tasks = [
	() => delay.error(1000, "error delay1"),
	() => delay.error(500, "error delay2"),
	() => delay(200, "delay3"),
	() => delay(200, "delay4"),
];

try {
	logTime(async () => {

		const r = await promiseFirst(tasks);
		console.log("r", r);
	});
} catch (e) {
	console.log("e", e);
}

```