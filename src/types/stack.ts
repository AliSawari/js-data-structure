import { NodeType } from "./linked-list";

export type StackType = {
  length: number;
  top: NodeType | null;
  push?(value: any): void;
  pop?(): NodeType | null;
}