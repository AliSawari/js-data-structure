import { NodeType } from "@src/types";
import { StackType } from "@src/types/stack";

export class Node implements NodeType {
  value: any;
  next?: NodeType | null;
  constructor(value: any) {
    this.value = value;
  }
}

export class Stack implements StackType {
  length: number = 0;
  top: NodeType | null;
  constructor() { }

  private increment(): void {
    this.length = this.length + 1;
  }

  private decrement(): void | null {
    if (this.length > 0) {
      this.length = this.length - 1;
    }
  }

  push(value: any) {
    const node = new Node(value);
    if (this.length == 0) this.top = node;
    if (this.length > 0) {
      node.next = this.top;
      this.top = node;
    }
    this.increment();
  }

  pop(): NodeType | null {
    if (this.length > 0) {
      let pointer = this.top;
      if (this.length == 1) {
        this.top = null;
        this.decrement();
        pointer.next = null;
        return pointer;
      } else {
        this.top = pointer.next;
        pointer.next = null;
        this.decrement();
        return pointer;
      }
    } else return null;
  }
}
