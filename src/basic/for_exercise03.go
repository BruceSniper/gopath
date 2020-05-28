package main

import (
	"fmt"
	"math"
)

func main() {
	/*
		水仙花数：三位数：[100, 999]
			每个位上的竹子的立方和，刚好等于该数字本身，那么就叫水仙花数，
			例如：
				1*1*1 + 5*5*5 + 3*3*3 = 153
	*/
	for i := 100; i <= 999; i++ {
		x := i / 100     //百位
		y := i / 10 % 10 //十位
		z := i % 10      //个位
		if math.Pow(float64(x), 3)+math.Pow(float64(y), 3)+math.Pow(float64(z), 3) == float64(i) {
			fmt.Printf("%d*%d*%d + %d*%d*%d + %d*%d*%d = %d\n", x, x, x, y, y, y, z, z, z, i)
		}
	}
}
