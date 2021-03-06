package main

import (
	"fmt"
	"sync"
	"time"
)

var rwMutex *sync.RWMutex //创建一个锁对象
var wg *sync.WaitGroup

func main() {
	rwMutex = new(sync.RWMutex) //创建对象
	wg = new(sync.WaitGroup)

	//wg.Add(2)
	//
	////证明可以同时进行
	//go readData(1)
	//go readData(2)

	wg.Add(3)
	go writeData(1)
	go readData(2)
	go writeData(3)

	wg.Wait()
	fmt.Println("main...over...")
}

func writeData(i int) {
	defer wg.Done()
	fmt.Println(i, "开始写：write start。。。")
	rwMutex.Lock() //写操作上锁
	fmt.Println(i, "正在写：writing...")
	time.Sleep(3 * time.Second)
	rwMutex.Unlock()
	fmt.Println(1, "写结束：write over...")
}

func readData(i int) {
	defer wg.Done()
	fmt.Println(i, "开始读：read start..")

	rwMutex.RLock()
	fmt.Println(i, "正在读数据：reading。。。")
	time.Sleep(3 * time.Second)
	rwMutex.RUnlock() //读操作解锁
	fmt.Println(i, "读结束：read over。。。")
}
