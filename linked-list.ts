type NodeType = {
  value: any
  next: NodeType | null
}

class NodeX implements NodeType {
  value: any;
  next: NodeType | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

type LinkedListType = {
  length: number
  head: NodeType | null
  tail: NodeType | null
  increment(): void
  decrement(): void
  push(value:any): LinkedListType
  pop(): NodeType | unknown
  shift(): void
  unshift(value:any): LinkedListType
  get(value:any): void
  set(value:any): void
  insert(value:any): void
  remove(value:any): void
  reverse(): void
}

class LinkedList implements LinkedListType {
  length = 0;
  head:any = null;
  tail:any = null;
  constructor(value?: any) {
    if (value) {
      const newNode = new NodeX(value)
      this.head = newNode;
      this.tail = newNode;
      this.increment();
    }
  }
  shift(): void {
    throw new Error("Method not implemented.");
  }
  get(): void {
    throw new Error("Method not implemented.");
  }
  set(): void {
    throw new Error("Method not implemented.");
  }
  insert(): void {
    throw new Error("Method not implemented.");
  }
  remove(): void {
    throw new Error("Method not implemented.");
  }
  reverse(): void {
    throw new Error("Method not implemented.");
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
    if(!this.head) return;
    let pointer:NodeType  = this.head;
    let before:NodeType | null = null;
    while(pointer.next){
      before = pointer;
      pointer = pointer.next;
    }

    if(!pointer.next){
      if(!before) {
        this.head = null;
        this.tail = null;
      } else {
        before.next = null;
        this.tail = before;
      }
      this.decrement();
      if(this.length === 1){
        this.head = this.tail;
      }

      return pointer || null;
    }
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


let myList = new LinkedList();
myList.push(34);
myList.push(548);
myList.push("hello");

myList.unshift("BEGINNING")

myList.log()
