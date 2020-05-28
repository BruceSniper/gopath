package main

import "fmt"

func main() {
	/*
		循环嵌套：多层循环嵌套在一起

		题目一：
		*****
		*****
		*****
		*****
		*****
	*/
	for i := 1; i <= 5; i++ {
		for j := 1; j <= 5; j++ {
			fmt.Print("*")
		}
		println()
	}

}
