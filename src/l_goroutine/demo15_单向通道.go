package main

import "fmt"

func main() {
	/*
		单向：定向
			chan <- T，只支持写操作
			<- chan T，只读

		定向通道：
			双向：--->函数：只读，只写
	*/
	ch1 := make(chan int) //双向，可读可写
	//ch2 := make(chan<- int) //单向（定向），只能写不能读
	//ch3 := make(<-chan int) //单向（定向），只能读不能写

	//ch1 <- 100
	//data := <-ch1 //可以

	//ch2 <- 1000
	//data := <- ch2 //不能读数据

	//data := <- ch3 //可以读
	//ch3 <- 2000 //不可写

	go fun1(ch1) //可读可写
	//fun1(ch2) //只写

	data := <-ch1
	//data := <- ch2
	fmt.Println("fun1函数中写出的数据是：", data)

	go fun2(ch1)
	//fun2(ch3)

	ch1 <- 200
	fmt.Println("main...over...")
}

//该函数，只能操作只写的通道
func fun1(ch chan<- int) {
	//在函数中内部，对于ch1通道，只能写数据，不能读数据
	ch <- 100
	fmt.Println("fun1函数结束。。。")
}

//该函数，只能操作只读的通道
func fun2(ch <-chan int) {
	data := <-ch
	fmt.Println("fun2函数，从ch中读取的数据是：", data)
}
