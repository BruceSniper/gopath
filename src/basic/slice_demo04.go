package main

import "fmt"

func main() {
	/*
		按照类型来分：
			基本类型：整型，浮点，布尔，字符串
			复合数据类型：array，slice，map，struct，pointer，function，channel...

		按照特点来分：
			值类型： int，float，string，bool，array
				传递的是数据副本
			引用类型：Slice
				传递的地址，多个变量指向了同一块内存地址

		所以：切片是引用类型的数据，存储了底层数组的引用
	*/

	//1.数组：值类型
	a1 := [4]int{1, 2, 3, 4}
	a2 := a1 //值传递：传递的是数据值
	fmt.Println(a1, a2)
	a1[0] = 100
	fmt.Println(a1, a2)
	fmt.Println("-------------")

	//2.切片：引用类型
	s1 := []int{1, 2, 3, 4}
	s2 := s1
	fmt.Println(s1, s2)
	s1[0] = 100
	fmt.Println(s1, s2)
}
