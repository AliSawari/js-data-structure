export type NodeType = {
  value: any
  next: NodeType | null
}

export class NodeX implements NodeType {
  value: any;
  next: NodeType | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export type LinkedListType = {
  length: number
  head: NodeType | null
  tail: NodeType | null
  increment(): void
  decrement(): void
  push(value:any): LinkedListType
  pop(): NodeType | unknown
  shift(): NodeType | unknown
  unshift(value:any): LinkedListType
  get(index:number): NodeType | unknown
  set(value:any): void
  insert(value:any): void
  remove(value:any): void
  reverse(): void
}

export class LinkedList implements LinkedListType {
  length = 0;
  head:NodeType | null = null;
  tail:NodeType | null = null;

  constructor(value?: any) {
    if (value) {
      const newNode = new NodeX(value)
      this.head = newNode;
      this.tail = newNode;
      this.increment();
    }
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

  get(index:number): NodeType {
    if(!this.head || index > this.length) return undefined;
    let pointer = this.head;
    for (let x = 1; x < index; x++) {
      if(pointer.next) pointer = pointer.next;
    }

    return pointer;
  }


  set() {
    
  }
  insert() {
    
  }
  remove() {
    
  }
  reverse() {
    
  }

  increment(): void {
    this.length = this.length + 1;
  }

  decrement(): void {
    this.length = this.length - 1;
  }

  push(value: any): LinkedListType {
    const newNode = new NodeX(value);
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


  pop(): NodeType | unknown {
    if (!this.head) return undefined;
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

  unshift(value:any): LinkedListType {
    const newNode = new NodeX(value);
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
    while(pointer.next){
      console.log("----")
      console.log("value:", pointer.value);
      console.log("next:", pointer.next.value);
      pointer = pointer.next;
    }
    if(this.tail){
      console.log("----")
      console.log("value:", this.tail.value);
      console.log("next:", this.tail.next);
      console.log("----")
    }
  }

  toJson(): void {
    console.log(JSON.stringify(this, null, 2))
  }
}