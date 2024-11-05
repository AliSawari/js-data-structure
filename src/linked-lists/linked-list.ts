import { LinkedListType, NodeType } from "@src/types"

export class Node implements NodeType {
  value: any;
  next: NodeType | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}


export class LinkedList implements LinkedListType {
  length = 0;
  head:NodeType | null = null;
  tail:NodeType | null = null;

  constructor(value?: any) {
    if (value) {
      const newNode = new Node(value)
      this.head = newNode;
      this.tail = newNode;
      this.increment();
    }
  }

  get(index:number): NodeType {
    if(!this.head || index >= this.length) return undefined;
    if(index === 0) return this.head;
    if(index === (this.length - 1)) return this.tail;
    let pointer = this.head;
    for (let x = 0; x < index; x++) {
      if(pointer.next) pointer = pointer.next;
    }
    return pointer;
  }


  set(index: number, value: any) {
    let temp = this.get(index);
    if(temp){
      temp.value = value;
      return true;
    } else return false;
  }


  insert(index:number, value:any) {
    if(index < 0 || index > this.length) return false;
    if(index === this.length) return this.push(value);
    if(index === 0) return this.unshift(value);
    const newNode = new Node(value);
    let prev = this.get(index - 1);
    newNode.next = prev.next;
    prev.next = newNode;
    this.increment();
    return true;
  }

  remove(index: number): NodeType {
    if(index < 0 || index >= this.length) return undefined
    if(index === 0) return this.shift()
    if(index === (this.length - 1)) return this.pop()

    const before = this.get(index - 1);
    const toBeRemoved = before.next;

    before.next = toBeRemoved.next;
    toBeRemoved.next = null;
    this.decrement();
    return toBeRemoved;
  }

  reverse(): LinkedListType {
    let pointer = this.head;
    this.head = this.tail;
    this.tail = pointer;
    let prev: NodeType = null;
    let next = pointer.next;
    for(let x=0; x< this.length; x++){
      next = pointer.next;
      pointer.next = prev;
      prev = pointer;
      pointer = next;
    }

    return this;
  }


  private increment(): void {
    this.length = this.length + 1;
  }

  private decrement(): void | null {
    if (this.length > 0) {
      this.length = this.length - 1;
    }
  }

  push(value: any): LinkedListType {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.increment();
    return this;
  }


  pop(): NodeType | null {
    if (!this.head) return null;
    let pointer = this.head;
    let pre = this.head;
    while (pointer.next) {
      pre = pointer;
      pointer = pointer.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.decrement();
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
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
    first.next = null;
    this.decrement();
    return first;
  }

  unshift(value:any): LinkedListType {
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.increment()
    return this;
  }


  log(): void {
    console.clear()
    console.log("Linked List Tree");
    if(!this.head){
      console.log("List is Empty!");
      console.log("Length: ", this.length);
      return;
    }
    console.log("Head:", this.head.value);
    console.log("Tail:", this.tail.value);
    console.log("Length:", this.length);
    console.log("#######")
    let pointer = this.head;
    for(let i = 0; i < this.length; i++){
      console.log("~",i);
      console.log("value:", pointer.value);
      console.log("next:", pointer.next ? pointer.next.value : undefined);
      pointer = pointer.next;
      console.log("----")
    }
    
  }

  toJson(): void {
    console.log(JSON.stringify(this, null, 2))
  }
}