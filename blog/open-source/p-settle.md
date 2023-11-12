# p-settle

`metadata:`

**链接:** https://github.com/sindresorhus/p-settle/tree/main

---

类似`Promise.allSettled`，但支持控制并发。

```js
import pReflect from 'p-reflect'
import pLimit from 'p-limit'

export default async function pSettle(array, options = {}) {
	const { concurrency = Number.POSITIVE_INFINITY } = options
	const limit = pLimit(concurrency)

	return Promise.all(array.map(element => {
		if (element && typeof element.then === 'function') {
			return pReflect(element)
		}

		if (typeof element === 'function') {
			return pReflect(limit(element))
		}

		return pReflect(Promise.resolve(element))
	}))
}

export { isFulfilled, isRejected } from 'p-reflect'

```