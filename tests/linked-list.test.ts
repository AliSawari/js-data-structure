import { LinkedList } from "../src/linked-lists/linked-list";

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
  });


})

