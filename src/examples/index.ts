
import { DoublyLinkedList } from '../linked-lists/doubly-linked-list'
import { LinkedList } from '../linked-lists/linked-list';
import { Stack } from "../stacks/stack";

// put an empty () at the end of each scope to run them immediately

// Linked Lists 

(function () {
  const myLinkedList = new LinkedList("Ali");

  myLinkedList.push("Reza")
  myLinkedList.push("Hamid")
  myLinkedList.push("Mosa")
  myLinkedList.push("Mohammad")
  myLinkedList.push("Taher")
  myLinkedList.push("Jesus")
  myLinkedList.pop();
  myLinkedList.insert(7, "Jafar")
  myLinkedList.log()

});

// doubly linked lists

(function () {
  const myDoubly = new DoublyLinkedList();

  myDoubly.push("Reza")
  myDoubly.push("Hamid")
  myDoubly.push("Mosa")
  myDoubly.push("Mohammad")
  myDoubly.push("Taher")
  myDoubly.push("Jesus")
  myDoubly.pop();
  myDoubly.log();

});

// Stacks

(function () {
  const myStack = new Stack();

  myStack.push("Ali")
  myStack.push("Reza")
  myStack.push("hamid")

  let pointer = myStack.pop();

  console.log(myStack)
  console.log(pointer)
});