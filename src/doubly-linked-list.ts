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


export type DoublyLinkedListType = {
  length: number
  head: NodeType | null
  tail: NodeType | null
  increment(): void
  decrement(): void
  push(value:any): DoublyLinkedListType
  pop(): NodeType | unknown
  shift(): NodeType | unknown
  unshift(value:any): DoublyLinkedListType
  get(index:number): NodeType | unknown
  set(value:any): void
  insert(value:any): void
  remove(value:any): NodeType | unknown
  reverse(): void
}


export class DoublyLinkedList implements DoublyLinkedListType {
  constructor(){
    
  }
  length: number;
  head: NodeType;
  tail: NodeType;
  increment(): void {
    throw new Error("Method not implemented.");
  }
  decrement(): void {
    throw new Error("Method not implemented.");
  }
  push(value: any): DoublyLinkedListType {
    throw new Error("Method not implemented.");
  }
  pop(): unknown {
    throw new Error("Method not implemented.");
  }
  shift(): unknown {
    throw new Error("Method not implemented.");
  }
  unshift(value: any): DoublyLinkedListType {
    throw new Error("Method not implemented.");
  }
  get(index: number): unknown {
    throw new Error("Method not implemented.");
  }
  set(value: any): void {
    throw new Error("Method not implemented.");
  }
  insert(value: any): void {
    throw new Error("Method not implemented.");
  }
  remove(value: any): unknown {
    throw new Error("Method not implemented.");
  }
  reverse(): void {
    throw new Error("Method not implemented.");
  }
}