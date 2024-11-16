import { NodeType } from "./linked-list";

export type QueueType = {
  length: number;
  front: NodeType | null;
  back: NodeType | null;
  enqueue?(value: any): void;
  dequeue?(): NodeType | null;
}