package main

import (
	"fmt"
	p "l_package/person"
	"l_package/pk1"
	"l_package/utils"
	"l_package/utils/timeutils"
) //绝对路径

//import "./utils" //相对路径

func main() {
	/*
		关于包的使用：
		1.一个目录下的同级文件归属一个包，package的声明要一致
		2.package声明的包和对应的目录名可以不一致，但是习惯上还是写成一致的
		3.包可以嵌套
		4.同包下的函数不需要导入包，可以直接使用
		5.main包，main()函数所在的包，其他的包不能使用
		6.导入包的时候，路径要从src下开始写
	*/
	utils.Count()
	timeutils.PrintTime()

	pk1.MyTest1()

	utils.MyTest2()

	fmt.Println("---------------------------")

	//p1 := p.Person{"王二狗",30,"男"}
	p1 := p.Person{Name: "王二狗", Sex: "男"}
	fmt.Println(p1.Name, p1.Sex)
}
