项目：[p-lazy](https://github.com/sindresorhus/p-lazy)

延迟执行`Promise`构造体。在调用`then`/`catch`时才执行`new PLazy(executor)`里的`executor`。

```js
export default class PLazy extends Promise {
	#executor;
	#promise;
	constructor(executor) {
		// 执行resolve，立即结束父类Promise
		super((resolve) => {
			resolve();
		});

		this.#executor = executor;
	}

	// then时再真正执行
	static resolve(value) {
    // 存到executor
		return new PLazy((resolve) => resolve(value));
	}

	// then时再真正执行
	static reject(error) {
    // 存到executor
		return new PLazy((_, reject) => reject(error));
	}

	// then时再真正执行
	static from(function_) {
		return new PLazy(resolve => resolve(function_()))
	}

	// 需要立刻执行executor，所以new Promise
	then(onFulfilled, onRejected) {
		this.#promise = this.#promise || new Promise(this.#executor);
		return this.#promise.then(onFulfilled, onRejected);
	}

	// 需要立刻执行executor，所以new Promise
	catch(onRejected) {
		this.#promise = this.#promise || new Promise(this.#executor);
		return this.#promise.catch(onRejected);
	}
}

```