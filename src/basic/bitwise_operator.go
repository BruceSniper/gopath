package main

import "fmt"

func main() {
	/*
		位运算符：
			将数值， 转为二进制， 按位操作
		按位&：
			对应位的值如果都为1才为1， 有一个为0就为0
		按位|:
			对应位的值如果都为0才为0， 有一个为1就为1
		异或^:
			二元： a^b
				对应位的值不同位1， 相同为0
			一元： ^a
				按位取反：
					1——>0
					0——>1
		位清空： &^
			对于 a &^ b
			对于b上的每个数值
			如果为0， 则取a对应位上的数值
			如果为1， 则结果位就取0
	*/
	a := 60
	b := 13
	/*
		a := 60 	0011 1100
		b := 13 	0000 1101
		&			0000 1100
		|			0011 1101
		^			0011 0001
		&^			0011 0000
	*/
	fmt.Printf("a: %d, %b\n", a, a)
	fmt.Printf("b: %d, %b\n", b, b)

	res1 := a & b
	fmt.Println(res1) // 12

	res2 := a | b
	fmt.Println(res2) // 61

	res3 := a ^ b // 49
	fmt.Println(res3)

	res4 := a &^ b // 48
	fmt.Println(res4)
}
