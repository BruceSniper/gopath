package main

import "fmt"

func main() {
	/*
		题目二：
		1X1=1
		2X1=1	2X2=4
		3X1=3	3X2=6	3X3=9
		....
		9X1=1	9X2=18	9X3=27 ... 9X9=81
	*/
	for i := 1; i <= 9; i++ {
		for j := 1; j <= i; j++ {
			fmt.Printf("%d X %d = %d\t", i, j, i*j)
		}
		fmt.Println()
	}
}
