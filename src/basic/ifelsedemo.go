package main

import "fmt"

func main() {
	/*
			if..else语句
				if 条件{
					//条件成立，执行此处的代码
					A段代码
				}else{
					//条件不成立， 执行此处的代码
					B段代码
		}

		注意点：
			1. if后的{， 一定是和if条件写在同一行的
			2. else一定是if语句}之后，不能自己另起一行
			3. if和else中的内容，二者必选其一来运行
	*/
	//给定一个成绩，如果大于等于60，就是及格，否则就是不及格

	score := 0
	fmt.Println("请输入您的成绩：")
	fmt.Scanln(&score)

	if score >= 60 {
		fmt.Println(score, "及格")
	} else {
		fmt.Println(score, "不及格")
	}

	fmt.Println("main...over...")
}
