package main

import "fmt"

func main() {
	/*
		1. 标准写法：
			for 表达式1； 表达式2； 表达式3 {
				循环体
		2. 同时省略表达式1和表达式3
			for 表达式2{
				循环体
			}
			相当于别的语言中的while循环
		3. 同时省略3个表达式
			for {
				循环体
			}
			相当于其他语言的while（true）
			注意点：当for循环中，省略了表达式2，就相当于直接作用在了true上
		4. 其他的写法： for循环中同时省略及格表达式都可以
			省略表达式1：定义变量要在for的外面
			省略表达式2：循环永远成立，死循环
			省略表达式3：变量的变化就要写在循环体内部，否则也是死循环
	*/
	i := 1
	for i <= 5 {
		fmt.Println(i)
		i++
	}
	fmt.Println(i)
	fmt.Println("----------")

	for {
		fmt.Println("------")
		i++
	}
}
