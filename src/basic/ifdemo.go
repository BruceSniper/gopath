package main

import "fmt"

func main() {
	/*
			条件语句： if
			语法格式：
				if 条件表达式{
					//
		}

	*/

	//1. 给定一个数字，如果大于10， 我们就输出打印这个数字大于10
	num := 6
	if num > 10 {
		/* 在布尔表达式为 true 时执行 */
		fmt.Println("大于10")
	}

	fmt.Println("main..over..")

	//2. 给定一个成绩，如果大于等于60分，就打印及格
	score := 88
	if score >= 60 {
		fmt.Println(score, "成绩及格")
	}
}
