import { LinkedListType, NodeType } from "@src/types"

export class Node implements NodeType {
  value: any;
  next: NodeType | null;
  previous: NodeType | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}


export class DoublyLinkedList implements LinkedListType {
  length: number = 0;
  head: NodeType | null;
  tail: NodeType | null;

  constructor(value?: any) {
    this.head = null;
    this.tail = null;
    if (value) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
      this.increment();
    }
  }

  private increment(): void {
    this.length = this.length + 1;
  }

  private decrement(): void {
    if (this.length > 0) {
      this.length = this.length - 1;
    }
  }

  set(index: number, value: any) {
    let temp = this.get(index);
    if (temp) {
      temp.value = value;
      return true;
    } else return false;
  }

  get(index: number): NodeType | null {
    if (!this.head || index >= this.length) return null;
    if (index === 0) return this.head;
    if (index === (this.length - 1)) return this.tail;
    let pointer: NodeType | null;

    let middle = Math.ceil(this.length / 2);
    if ((index + 1) <= middle) {
      pointer = this.head;
      for (let x = 0; x < index; x++) {
        if (pointer.next) pointer = pointer.next;
      }
    } else {
      pointer = this.tail;
      for (let x = (this.length - 1); x > index; x--) {
        if (pointer.previous) pointer = pointer.previous;
      }
    }

    return pointer;
  }


  push(value: any): LinkedListType {
    const newNode = new Node(value);
    if (this.length == 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.increment();
    return this;
  }



  pop(): NodeType | null {
    if (!this.head) return null;
    let pointer: NodeType;
    if (this.length == 1) {
      pointer = this.head;
      this.head = null;
      this.tail = null;
    } else {
      pointer = this.tail;
      this.tail.previous.next = null;
      this.tail = this.tail.previous;
    }
    pointer.next = null;
    pointer.previous = null;
    this.decrement();
    return pointer;
  }



  shift(): NodeType {
    if (!this.head) return undefined;
    const first = this.head;
    if (first.next && first.next.value) {
      this.head = first.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.head.previous = null;
    first.next = null;
    this.decrement();
    return first;
  }


  unshift(value: any): LinkedListType {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.increment()
    return this;
  }


  insert(index: number, value: any) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(value);
    if (index === 0) return this.unshift(value);
    const newNode = new Node(value);
    let prev = this.get(index - 1);
    prev.next.previous = newNode;
    newNode.next = prev.next;
    newNode.previous = prev;
    prev.next = newNode;
    this.increment();
    return true;
  }

  remove(index: number): NodeType {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === (this.length - 1)) return this.pop();

    const before = this.get(index - 1);
    const toBeRemoved = before.next;
    const after = toBeRemoved.next;

    before.next = after;
    after.previous = before;
    toBeRemoved.next = null;
    toBeRemoved.previous = null;
    this.decrement();
    return toBeRemoved;
  }


  reverse(): void {
    if (this.length < 2) return null;
    let head = this.head;
    let pointer = this.tail;
    this.head = pointer;
    this.tail = head;
    let prev: NodeType;
    for (let x = 0; x < this.length; x++) {
      pointer.next = pointer?.previous;
      pointer.previous = prev;
      prev = pointer;
      pointer = pointer?.next;
    }
  }



  log(): void {
    console.clear()
    console.log("Linked List Tree");
    if (!this.head) {
      console.log("List is Empty!");
      console.log("Length: ", this.length);
      return;
    }
    console.log("Head:", this.head.value);
    console.log("Tail:", this.tail.value);
    console.log("Length:", this.length);
    console.log("#######");
    let pointer = this.head;
    for (let i = 0; i < this.length; i++) {
      console.log("~", i);
      console.log("value:", pointer.value);
      console.log("next:", pointer.next ? pointer.next.value : undefined);
      console.log("prev:", pointer.previous ? pointer.previous.value : undefined);
      pointer = pointer.next;
      console.log("----");
    }

  }
}