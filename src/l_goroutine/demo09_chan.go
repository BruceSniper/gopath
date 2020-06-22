package main

import "fmt"

func main() {
	//创建通道ch1
	var ch1 chan bool
	ch1 = make(chan bool)

	//启动子goroutine
	go func() {
		for i := 0; i < 10; i++ {
			fmt.Println("子goroutine中，i:", i)
		}
		//循环结束后，向通道中写数据，表示要结束了
		ch1 <- true
		fmt.Println("结束。。。。")
	}()

	//从通道中取数据（阻塞的）
	data := <-ch1
	fmt.Println("main...data--->", data)
	fmt.Println("main...over...")
}
