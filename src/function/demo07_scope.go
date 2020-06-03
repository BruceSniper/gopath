package main

import "fmt"

//全局变量的定义
//num3 := 1000 //不支持简短定义的写法
var num3 int = 1000

func main() {
	/*
		作用域：变量可以使用的范围
			局部变量：函数内部定义的变量，就叫做局部变量
				变量在哪里定义，就只能在哪个范围使用，超出这个范围，我们认为变量就被销毁了

			全局变量：函数外部定义的变量，就叫做全局变量
	*/
	//定义在main函数中，所以n的作用域就是main函数的范围内
	n := 10
	fmt.Println(n)

	if a := 1; a <= 10 {
		fmt.Println(a) //1
		fmt.Println(n) //10
	}
	//fmt.Println(a)
	fmt.Println(n)

	if b := 1; b <= 10 {
		n := 20
		fmt.Println(b) //1
		fmt.Println(n) //20
	}

	fun1()
	fun2()
	fmt.Println(num3)
}

func fun1() {
	//fmt.Println(n)
	num1 := 100
	fmt.Println("fun1()函数中：", num1)
}

func fun2() {
	num1 := 200
	fmt.Println("在fun2()函数中：num1:", num1)
}
