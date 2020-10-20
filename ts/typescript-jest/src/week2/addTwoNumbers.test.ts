import { addTwoNumbers } from "./addTwoNumbers";
import { ListNode } from "./models/listNode";

describe("Add Two Numbers", () => {
  it("342 + 465 = 807", () => {
    let root1: ListNode;
    let current1: ListNode;

    const first = [2, 4, 3];
    for (const n of first) {
      if (root1 === undefined) {
        root1 = new ListNode(n);
        current1 = root1;
      } else {
        current1.next = new ListNode(n);
        current1 = current1.next;
      }
    }

    let root2: ListNode;
    let current2: ListNode;

    const second = [5, 6, 4];
    for (const n of second) {
      if (root2 === undefined) {
        root2 = new ListNode(n);
        current2 = root2;
      } else {
        current2.next = new ListNode(n);
        current2 = current2.next;
      }
    }

    const r = addTwoNumbers(root1, root2);
    expect(r.val).toEqual(7);
    expect(r.next.val).toEqual(0);
    expect(r.next.next.val).toEqual(8);
    expect(r.next.next.next).toBeUndefined();
  });

  it("1000 + 2000 = 3000", () => {
    let root1: ListNode;
    let current1: ListNode;

    const first = [0, 0, 0, 1];
    for (const n of first) {
      if (root1 === undefined) {
        root1 = new ListNode(n);
        current1 = root1;
      } else {
        current1.next = new ListNode(n);
        current1 = current1.next;
      }
    }

    let root2: ListNode;
    let current2: ListNode;

    const second = [0, 0, 0, 2];
    for (const n of second) {
      if (root2 === undefined) {
        root2 = new ListNode(n);
        current2 = root2;
      } else {
        current2.next = new ListNode(n);
        current2 = current2.next;
      }
    }

    const r = addTwoNumbers(root1, root2);
    expect(r.val).toEqual(0);
    expect(r.next.val).toEqual(0);
    expect(r.next.next.val).toEqual(0);
    expect(r.next.next.next.val).toEqual(3);
    expect(r.next.next.next.next).toBeUndefined();
  });

  it("0 + 2 = 2", () => {
    let root1: ListNode;
    let current1: ListNode;

    const first = [0];
    for (const n of first) {
      if (root1 === undefined) {
        root1 = new ListNode(n);
        current1 = root1;
      } else {
        current1.next = new ListNode(n);
        current1 = current1.next;
      }
    }

    let root2: ListNode;
    let current2: ListNode;

    const second = [2];
    for (const n of second) {
      if (root2 === undefined) {
        root2 = new ListNode(n);
        current2 = root2;
      } else {
        current2.next = new ListNode(n);
        current2 = current2.next;
      }
    }

    const r = addTwoNumbers(root1, root2);
    expect(r.val).toEqual(2);
    expect(r.next).toBeUndefined();
  });
});
