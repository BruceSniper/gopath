package main

import "fmt"

func main() {
	/*
		算数运算符：+, -, *, /, %, ++, --
	*/
	a := 10
	b := 3
	sum := a + b
	fmt.Printf("%d + %d = %d\n", a, b, sum)

	sub := a - b
	fmt.Printf("%d - %d = %d\n", a, b, sub)

	mul := a * b
	fmt.Printf("%d * %d = %d\n", a, b, mul)

	div := a / b //取商
	mod := a % b //取余
	fmt.Printf("%d / %d = %d\n", a, b, div)
	fmt.Printf("%d %% %d = %d\n", a, b, mod)

	c := 3
	c++
	fmt.Println(c)

	c--
	fmt.Println(c)
}
