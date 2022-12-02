import { LinkedList } from "./linked-list";

let myList = new LinkedList();
myList.push("ahmad");
myList.push("ali");
myList.push("reza");
// myList.push("saeed");

myList.log();

const some = myList.remove(44);

myList.log();