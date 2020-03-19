function MyCircularQueue(k) {
    this.head = 0;
    this.count = 0;
    this.queue = new Array(k);
}

// 检查循环队列是否为空。
MyCircularQueue.prototype.isEmpty = function() {
    return this.count === 0;
}

// 检查循环队列是否已满。
MyCircularQueue.prototype.isFull = function() {
    return this.count === this.queue.length;
}

MyCircularQueue.prototype.getTail = function() {
    return (this.head + this.count - 1) % this.queue.length;
}

// 从队首获取元素。如果队列为空，返回 -1 。
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1;
    }

    return this.queue[this.head];
}

// Rear: 获取队尾元素。如果队列为空，返回 -1 。
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1;
    }

    return this.queue[this.getTail()];
}

// enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
MyCircularQueue.prototype.enQueue = function(val) {
    if (this.isFull()) {
        return false;
    }

    this.queue[this.getTail() + 1] = val;
    this.count ++;
    return true;
}

// deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) {
        return false;
    }

    this.queue[this.head] = null;
    this.head = (this.head + 1) % this.queue.length;
    this.count --;
    return true;
}

var circularQueue = new MyCircularQueue(3); // 设置长度为 3

console.log(circularQueue.enQueue(1));  // 返回 true

console.log(circularQueue.enQueue(2));  // 返回 true

console.log(circularQueue.enQueue(3));  // 返回 true

console.log(circularQueue.enQueue(4));  // 返回 false，队列已满

console.log(circularQueue.Rear());  // 返回 3

console.log(circularQueue.isFull());  // 返回 true

console.log(circularQueue.deQueue());  // 返回 true

console.log(circularQueue.enQueue(4));  // 返回 true

console.log(circularQueue.Rear());  // 返回 4