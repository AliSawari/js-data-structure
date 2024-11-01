import { LinkedList, LinkedListType, Node } from "../src/linked-lists/linked-list";

describe("Testing LinkedLists", () => {

  describe("Creating Lists", () => {
    const myList = new LinkedList();
    it("Should be defined", () => expect(myList).toBeDefined());
    it("Should be instance of a LinkedList", () => expect(myList).toBeInstanceOf(LinkedList))
    it("Should have length of 0", () => expect(myList.length).toBe(0));
    it("Should have head of null", () => expect(myList.head).toBeNull());
    it("Should have tail of null", () => expect(myList.tail).toBeNull());
  });


  describe("Adding Elements to an Empty List", () => {
    const myList = new LinkedList();
    myList.push('Hello');
    it("Should have length of 1", () => expect(myList.length).toBe(1));
    it("Should have head and tail", () => {
      expect(myList.head).toBeDefined();
      expect(myList.tail).toBeDefined();
    });
    it("Should have head and tail as the same value", () => {
      expect(myList.head.value).toBe("Hello");
      expect(myList.tail.value).toBe("Hello");
    });
  });

  describe("Adding Elements to a populated list", () => {
    const myList = new LinkedList("Hello");
    myList.push("World");
    myList.push("There!");
    it("Should have length of 3", () => expect(myList.length).toBe(3));
    it("Should have head and tail", () => {
      expect(myList.head).toBeDefined();
      expect(myList.tail).toBeDefined();
    });
    it("Should have head and tail with different values", () => {
      expect(myList.head.value).toBe("Hello");
      expect(myList.tail.value).toBe("There!");
      expect(myList.head.value).not.toBe("There!");
      expect(myList.tail.value).not.toBe("Hello");
    });
    it("Should maintain the link between all the elements", () => {
      const len = 3;
      const n1 = new Node("Hello");
      const n2 = new Node("World");
      const n3 = new Node("There!");
      n1.next = n2;
      n2.next = n3;
      const list: Partial<LinkedListType> = { length: len, head: n1, tail: n3 };
      expect(myList.head).toEqual(n1);
      expect(myList.head.next).toEqual(n2);
      expect(myList.head.next.next).toEqual(n3);
      expect(myList.tail).toEqual(n3);
      expect(myList.head.next.next).toEqual(myList.tail);
      expect(myList.length).toBe(len);
      expect(myList).toEqual(list);
    });
  });


  describe("Removing Elements from an empty list", () => {
    it("Should return null if the list is empty", () => {
      const myList = new LinkedList();
      const returnValue = myList.pop();
      expect(returnValue).toBe(null);
      expect(returnValue).toBeNull();
    })
  });


  describe("Removing Elements from a populated list", () => {
    it("Should pop element and return it", () => {
      const myList = new LinkedList();
      myList.push("Hello");
      myList.push("world");
      myList.push("3");
      const returnValue = myList.pop();
      expect(returnValue).toBeInstanceOf(Node);
      expect(returnValue.value).toBe("3");
      expect(returnValue.next).toBeNull();
    });

    it("Should maintain the link between all the elements", () => {
      const myList = new LinkedList();
      myList.push("Hello");
      myList.push("World");
      myList.push("3");
      myList.pop();
      const n1 = new Node("Hello");
      const n2 = new Node("World");
      n1.next = n2;
      const list: Partial<LinkedListType> = { length: 2, head: n1, tail: n2 };
      expect(myList.head).toEqual(n1);
      expect(myList.head.next).toEqual(n2);
      expect(myList.tail).toEqual(n2);
      expect(myList.head.next).toEqual(myList.tail);
      expect(myList.length).toBe(2);
      expect(myList).toEqual(list);
    });
  });
});

