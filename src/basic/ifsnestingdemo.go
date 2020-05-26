package main

import "fmt"

func main() {
	/*
			if语句的嵌套：
			if 条件1{
				A段
			}else{
				if 条件2{
					B段
				}else{
					C段
				}
			}

		简写：
		if 条件1{
			A段
		} else {
			if 条件2{
				B段
			} else {
				C段
		}
		}
	*/

	sex := "泰国" //bool, int, string

	if sex == "男" {
		fmt.Println("可以去男厕所啦") // sex 是男
	} else {
		//女，其他
		if sex == "女" {
			fmt.Println("你去女厕所吧") //sex 是女
		} else {
			fmt.Println("我也不知道了")
		}
	}
}
