import { NodeType } from "@src/types";
import { QueueType } from "@src/types/queue";

class Node implements NodeType {
  value: any;
  next: NodeType | null;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}


export class Queue implements QueueType {
  length: number = 0;
  front: NodeType;
  back: NodeType;
  constructor() { }

  enqueue(value: any): void {
    const newNode = new Node(value);
    if (!this.front) {
      this.back = newNode;
      this.front = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
    this.length += 1;
  }

  dequeue?(): NodeType | null {
    if (!this.front) return null;
    const item = this.front;
    if (this.length == 1) {
      this.back = null;
      this.front = null;
    } else this.front = this.front.next;
    item.next = null;
    this.length -= 1;
    return item;
  }


}