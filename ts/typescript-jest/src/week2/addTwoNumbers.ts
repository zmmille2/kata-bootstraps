import { ListNode } from "./models/listNode";

function sumNodes(n1: ListNode, n2: ListNode) {
  return (n1 ? n1.val : 0) + (n2 ? n2.val : 0);
}

/**
 * add two numbers
 *
 * @param {ListNode} n1 node 1
 * @param {ListNode} n2 node 2
 * @returns {ListNode} result
 */
export function addTwoNumbers(n1: ListNode, n2: ListNode): ListNode {
  let root: ListNode;
  let current: ListNode;
  while (n1 || n2) {
    const sum = sumNodes(n1, n2);
    if (!root) {
      root = ListNode
    }
  }
}
