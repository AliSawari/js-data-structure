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
  length: number;
  head: NodeType;
  tail: NodeType;

  constructor(value?: any) {
    this.head = null;
    this.tail = null;
    if (value) {
      const newNode = new Node(value)
      this.head = newNode;
      this.tail = newNode;
      this.increment();
    }
  }

  private increment(): void {
    this.length = this.length + 1;
  }

  private decrement(): void | null {
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

  get(index: number): NodeType {
    if (!this.head || index >= this.length) return undefined;
    if (index === 0) return this.head;
    if (index === (this.length - 1)) return this.tail;
    let pointer = this.head;
    for (let x = 0; x < index; x++) {
      if (pointer.next) pointer = pointer.next;
    }
    return pointer;
  }

}