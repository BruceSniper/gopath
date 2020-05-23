package main

import "fmt"

func main() {
	/*
		字符串：
	1. 概念：多个byte的集合，理解为一个字符序列
	2. 语法：使用双引号
		"abc", "hello","A"
			也可以使用``
	3. 编码问题
		计算机本身只识别0和1
		A: 65, B: 66, C: 67...
		a: 97, b: 98...
		ASCII(美国标准信息交换码)

		中国的编码表： gbk， 兼容ASCII

		Unicode编码表：号称统一了全世界
			UTF8, UTF16, UTF32...

	4. 转义字符： \
		A: 有一些字符，有特殊作用， 可以转义为普通的字符
			\', \"
		B: 有一些字符，就是一个普通字符，转义之后反而有了特殊的作用
			\n: 换行
			\t: 跳过一个制表符
	*/
	//1. 定义字符串
	var s1 string
	s1 = "王二狗"
	fmt.Printf("%T, %s\n", s1, s1)

	s2 := `Hello World`
	fmt.Printf("%T, %s\n", s2, s2)

	//2. 区别：'A',"A"
	v1 := 'A'		//int32, 65
	v2 := "A"
	fmt.Printf("%T, %d\n", v1, v1)
	fmt.Printf("%T, %s\n", v2, v2)

	v3 := '中'		//int32, 20013
	fmt.Printf("%T, %d, %c, %q\n", v3, v3, v3, v3)

	//3. 转义字符
	fmt.Println("\"Helloworld\"")
	fmt.Println("Hello\nwor\tld")

	fmt.Println(`He"lloWor"ld`)
	fmt.Println("He`lloWor`ld")
}
