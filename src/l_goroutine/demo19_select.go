package main

import (
	"fmt"
	"time"
)

func main() {
	ch1 := make(chan int)
	ch2 := make(chan int)

	go func() {
		time.Sleep(3 * time.Second)
		ch1 <- 100
	}()

	select {
	case <-ch1: //阻塞
		fmt.Println("case1可以执行")
	case <-ch2: //阻塞
		fmt.Println("case2可以执行")
	case <-time.After(3 * time.Second): //暂时阻塞，3秒之后就解除阻塞
		fmt.Println("case3执行。。。timeout....")
		//default:
		//	fmt.Println("执行了default...")
	}
}
