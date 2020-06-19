package main

import (
	"fmt"
	"runtime"
	"time"
)

func init() {
	//获取逻辑CPU数量
	fmt.Println("逻辑CPU数量---->", runtime.NumCPU()) //4

	//设置go程序执行的最大cpu的数量：[1,256]
	n := runtime.GOMAXPROCS(runtime.NumCPU())
	fmt.Println(n)
}

func main() {
	//获取goroot目录
	fmt.Println("GOROOT---->", runtime.GOROOT()) //C:\Go
	//获取操作系统
	fmt.Println("os/platform---->", runtime.GOOS) //windows
	////获取逻辑CPU数量
	//fmt.Println("逻辑CPU数量---->", runtime.NumCPU()) //4
	//
	////设置go程序执行的最大cpu的数量：[1,256]
	//n := runtime.GOMAXPROCS(runtime.NumCPU())
	//fmt.Println(n)

	//gosched
	//go func() {
	//	for i := 0; i<5; i++ {
	//		fmt.Println("goroutine...")
	//	}
	//}()
	//
	//for i := 0; i < 4; i++ {
	//	//让出时间片，先让别的gourutine执行
	//	runtime.Gosched()
	//	fmt.Println("main....")
	//}

	//创建goroutine
	go func() {
		fmt.Println("goroutine开始..")
		//调用fun
		fun()
		fmt.Println("gouroutine结束")
	}()

	//睡一会儿
	time.Sleep(3 * time.Second)
}

func fun() {
	defer fmt.Println("defer....")
	//return //终止函数
	runtime.Goexit() //终止当前的goroutine
	fmt.Println("func函数。。。。")
}
