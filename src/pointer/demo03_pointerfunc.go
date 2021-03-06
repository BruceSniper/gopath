package main

import "fmt"

func main() {
	/*
		函数指针：一个指针，指向了一个函数的指针。
			因为go语言中，function默认看做一个指针，没有 *

			引用类型：切片slice，集合map，函数function

		指针函数：一个函数，该函数的返回值是一个指针
	*/
	var a func()
	a = fun1
	a()

	arr1 := fun2() //arr1=arr
	fmt.Printf("arr1的类型是：%T, 地址：%p, 数值：%v\n", arr1, &arr1, arr1)

	arr2 := fun3()
	fmt.Printf("arr2的类型是：%T，地址：%p, 数值：%v\n", arr2, &arr2, arr2)
	fmt.Printf("arr2指针中存储的数组的地址：%p\n", arr2)
}

func fun1() {
	fmt.Println("fun1()...")
}

func fun2() [4]int {
	arr := [4]int{1, 2, 3, 4}
	return arr
}

func fun3() *[4]int {
	arr := [4]int{5, 6, 7, 8}
	fmt.Printf("函数中arr的地址：%p\n", &arr)
	return &arr
}
