export type NodeType = {
  value: any
  next?: NodeType | null,
  previous?: NodeType | null
}

export type LinkedListType = {
  length: number
  head: NodeType | null
  tail: NodeType | null
  push?(value:any): LinkedListType
  pop?(): NodeType | unknown
  shift?(): NodeType | unknown
  unshift?(value:any): LinkedListType
  get?(index:number): NodeType | unknown
  set?(index: number, value:any): boolean
  insert?(index: number, value:any): void
  remove?(value:any): NodeType | unknown
  reverse?(): void
  log?(): void
}