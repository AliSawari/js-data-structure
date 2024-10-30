import { NodeType, Node } from './linked-list';

export type StackType = {
  length: number;
  top: NodeType | null;
}

export class Stack implements StackType {
  length: number = 0;
  top: NodeType | null;
  static counter: number;
  constructor() {}

  private increment(): void {
    this.length = this.length + 1;
  }

  private decrement(): void | null {
    if (this.length > 0) {
      this.length = this.length - 1;
    }
  }

  push(value:any){
    const node = new Node(value);
    if(this.length == 0) this.top = node;
    if(this.length > 0){
      node.next = this.top;
      this.top = node;
      this.increment();
    }
  }
}
