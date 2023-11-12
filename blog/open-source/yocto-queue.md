# yocto-queue

`metadata:`

**链接:** https://github.com/sindresorhus/yocto-queue

---

先进先出单项链表，支持压栈、出栈、迭代和获取长度。重点是理解`#24-25行`,起到链接`Node`作用.
```js{24,25}
class Node {
  value;
  next;

  constructor(value) {
    this.value = value;
  }
}

export default class Queue {
  #head;
  #tail;
  #size;

  constructor() {
    this.clear();
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.#head) {
      // this.#head.next.next.next....
      this.#tail.next = node;
      this.#tail = node;
    } else {
      this.#head = node;
      this.#tail = node;
    }

    this.#size++;
  }

  dequeue() {
    const node = this.#head;
    if (!node) {
      return;
    }

    this.#head = this.#head.next;
    this.#size--;
    return node.value;
  }

  get size() {
    return this.#size;
  }

  *[Symbol.iterator]() {
    let node = this.#head;
    while (node) {
      yield node.value;
      node = node.next;
    }
  }

  clear() {
    this.#head = undefined;
    this.#tail = undefined;
    this.#size = 0;
  }
}


```