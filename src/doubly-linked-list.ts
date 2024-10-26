import { LinkedListType } from './linked-list'

export type NodeType = {
  value: any
  next: NodeType | null
  previous: NodeType | null
}

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
    if((index+1) <= middle) {
      pointer = this.head;
      for (let x = 0; x < index; x++) {
        if (pointer.next) pointer = pointer.next;
      }
    } else {
      pointer = this.tail;
      for(let x = (this.length-1); x > index; x--){
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



  shift(): NodeType | unknown {
    throw new Error('Method not implemented.')
  }
  unshift(value: any): LinkedListType {
    throw new Error('Method not implemented.')
  }
  insert(index: number, value: any): void {
    throw new Error('Method not implemented.')
  }
  remove(value: any): NodeType | unknown {
    throw new Error('Method not implemented.')
  }
  reverse(): void {
    throw new Error('Method not implemented.')
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
}