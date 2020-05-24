package main

import "fmt"

func main() {
	/*
		逻辑运算符：操作数必须是bool， 运算结果也是bool
		逻辑与： &&
			运算规则： 所有的操作数都是真， 结果才为真， 有一个为假， 结果为假
				"一假则为假， 全真才为真"

		逻辑或： ||
			运算规则：所有的操作数都是假， 结果才为假， 有一个为真， 结果为真
				"一真则为真， 全假才为假"
	*/

	a := 3
	b := 2
	c := 5
	res5 := a > b && c%a == b && a < (c/b)
	fmt.Println(res5)
}
