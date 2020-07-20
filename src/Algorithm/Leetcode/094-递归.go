package Leetcode

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func inorderTraversal(root *TreeNode) []int {
	return inorderRecursive(root)
}

func inorderRecursive(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}
	r := append(inorderRecursive(root.Left), root.Val)
	r = append(r, inorderRecursive(root.Right)...) //...代表右子树元素被打散一个个append到根节点后面
	return r
}
