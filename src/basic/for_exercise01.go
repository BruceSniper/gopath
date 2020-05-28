package main

import "fmt"

func main() {
	/*
		for循环练习题：
		练习1：打印58-23数字
		练习2：求1-100的和
				sum := 0
		练习3：打印1-100内，能够被3整除，但是不能被5整除的数字，统计被打印数字的个数，每行打印5个
	*/
	for i := 58; i >= 23; i-- {
		fmt.Println(i)
	}
	fmt.Println("---------")

	sum := 0
	for n := 0; n <= 100; n++ {
		sum += n
	}
	fmt.Println(sum)
	fmt.Println("---------")

	sum_num := 0
	for num := 1; num <= 100; num++ {
		if num%3 == 0 && num%5 != 0 {
			fmt.Print(num, "\t")
			sum_num += 1
			if sum_num%5 == 0 {
				fmt.Println()
			}
		}
	}
	fmt.Printf("\n能被3整除但不能被5整除的数一共有：%d 个\n", sum_num)
}
