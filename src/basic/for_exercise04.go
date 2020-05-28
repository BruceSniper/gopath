package main

import (
	"fmt"
	"math"
)

func main() {
	/*
		打印2-100内的素数（只能被1和本身整除）
	*/
	for i := 1; i <= 100; i++ {
		flag := true                                       //记录i是否是素数
		for j := 2; j <= int(math.Sqrt(float64(i))); j++ { //判断到根号i就行了
			if i%j == 0 {
				flag = false //不是素数了
				break
			}
		}
		if flag == true {
			fmt.Println(i)
		}
	}
}
