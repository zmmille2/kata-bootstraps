import { ListNode } from "./models/listNode";

/**
 * add two numbers
 *
 * @param {ListNode} n1 node 1
 * @param {ListNode} n2 node 2
 * @returns {ListNode} result
 */
export function addTwoNumbers(n1: ListNode, n2: ListNode): ListNode {
  let sum1 = 0;
  let multiplier = 1;
  let current = n1;
  while (current !== undefined) {
    sum1 += current.val * multiplier;
    multiplier *= 10;
    current = current.next;
  }
  let sum2 = 0;
  multiplier = 1;
  current = n2;
  while (current !== undefined) {
    sum2 += current.val * multiplier;
    multiplier *= 10;
    current = current.next;
  }
  let s = sum1 + sum2;
  let res: ListNode;
  let c: ListNode;
  while (s > 0) {
    const q = Math.floor(s / 10);
    const r = s % 10;
    if (res === undefined) {
      res = new ListNode(r);
      c = res;
    } else {
      c.next = new ListNode(r);
      c = c.next;
    }
    s = q;
  }
  return res;
}
