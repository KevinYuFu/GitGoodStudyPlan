# 2. Add Two Numbers

from typing import Optional


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# Convert a Num into ListList with while loop
def numToList1(num: int) -> Optional[ListNode]:
    listNodeNum = ListNode()

    iterator = listNodeNum
    while True:
        iterator.next = ListNode(num % 10)

        if num < 10:
            break

        num = int(num / 10)
        iterator = iterator.next

    return listNodeNum.next


# Convert a Num into ListList with recursion
def numToList2(num: int) -> Optional[ListNode]:
    if num < 10:
        return ListNode(num)

    return ListNode(num%10, numToList2(int(num/10)))

# Print List
def printLinkedList(listNode):
    if listNode:
        print(listNode.val)
        printLinkedList(listNode.next)

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        pass

