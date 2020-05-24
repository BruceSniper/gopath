package main

import "fmt"

func main() {
	/*
		关系运算符： >, <, =, <=, >=, ==, !=
	*/
	a := 3
	b := 5
	c := 3
	res1 := a > b
	res2 := b > c
	fmt.Printf("%T, %t\n", res1, res1)
	fmt.Printf("%T, %t\n", res2, res2)
}
