package main

import (
	"fmt"
)

func main() {
	ch1 := make(chan int)

	go func() {
		fmt.Println("子goroutine开始执行。。。")
		//time.Sleep(3 * time.Second)
		data := <-ch1 //从ch1中读取数据(阻塞)
		fmt.Println("data:", data)
	}()

	//time.Sleep(5 * time.Second)
	ch1 <- 10
	fmt.Println("main...over...")

	//ch := make(chan int)
	//ch <- 100 //阻塞，造成死锁
	/*
		fatal error: all goroutines are asleep - deadlock!

		goroutine 1 [chan send]:
		main.main()
		E:/gopath/src/l_goroutine/demo10_chan.go:22 +0x108
	*/
}
