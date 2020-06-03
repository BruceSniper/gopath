package main

import "fmt"

func main() {
	/*
		递归函数（recursion）：一个函数自己调用自己，就叫做递归函数
			递归函数有一个出口，逐渐的向出口靠近
	*/
	//1.求1-5的和
	sum := getSum(5)
	fmt.Println(sum)

	//2.fibonacci数列：
	res := getFibonacci(12)
	fmt.Println(res)

}
func getSum(n int) int {
	if n == 1 {
		return 1
	}
	return getSum(n-1) + n
}

func getFibonacci(n int) int {
	if n == 1 || n == 2 {
		return 1
	}
	return getFibonacci(n-1) + getFibonacci(n-2)
}
