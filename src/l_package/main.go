package main

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"l_package/pk1"
	"l_package/utils"
)

//import (
//	"fmt"
//	p "l_package/person"
//	"l_package/pk1"
//	"l_package/utils"
//	"l_package/utils/timeutils"
//) //绝对路径

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
	//utils.Count()
	//timeutils.PrintTime()
	//
	//pk1.MyTest1()
	//
	//utils.MyTest2()
	//
	//fmt.Println("---------------------------")
	//
	////p1 := p.Person{"王二狗",30,"男"}
	//p1 := p.Person{Name: "王二狗", Sex: "男"}
	//fmt.Println(p1.Name, p1.Sex)

	/*
		init()函数和mian()函数
		1.这两个函数都是go语言中的保留函数，init()用于初始化信息，main()用于作为程序的入口
		2.这两个函数定义的时候不能有参数和返回值，只能由 go 程序自动调用，不可以被引用
		3.init 可以应用于任意包中，且可以重复定义多个。main 函数只能用于 main 包中，且只能定义一个。
		4.执行顺序：
			A:先执行init()函数，后执行main()函数
			B:对于同一个go文件中，调用顺序是从上到下的，也就是说，先写的先被执行，后写的后被执行
			C:对于同一个包下的不同文件，将文件名按字符串进行“从小到大”排序，之后顺序调用各文件中的init()函数。
			D:对于不同包下：
				如果不存在依赖，按照main包中import的顺序来调用对应的包中的init()函数
				如果存在依赖关系，最后被依赖的最先被初始化
					导入顺序：main--->A--->B--->C
					执行顺序：C--->B--->A--->main
		5.存在依赖关系的包之间，不能循环导入
		6.一个包可以被其他多个包import，但只能被初始化一次
		7._操作，其实是引入该包，而不直接使用包里面的函数，仅仅是调用了该包里的init()
	*/

	utils.Count()
	pk1.MyTest1()

	db, err := sql.Open("mysql", "root:1892@tcp(127.0.0.1:3306)/my1802?charset=utf8")
	if err != nil {
		fmt.Println("错误信息：", err)
		return
	}
	fmt.Println("链接成功", db)
}
