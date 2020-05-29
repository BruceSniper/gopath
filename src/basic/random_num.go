package main

import (
	"fmt"
	"math/rand"
	"time"
)

func main() {
	/*
		生成随机数random：
			伪随机数，根据一定的算法公式算出来的
		math/rand
	*/
	num1 := rand.Int()
	fmt.Println(num1)

	for i := 0; i < 10; i++ {
		num := rand.Intn(10) //[0,10)
		fmt.Println(num)
	}
	rand.Seed(3)
	num2 := rand.Intn(10)
	fmt.Println("-->", num2)

	t1 := time.Now()
	fmt.Println(t1)
	fmt.Printf("%T\n", t1)

	//时间戳：指定时间，距离1970年1月1日0点0分0秒，之间的时间差值: 秒， 纳秒
	timeStamp1 := t1.Unix() //秒
	fmt.Println(timeStamp1)

	timeStamp2 := t1.UnixNano()
	fmt.Println(timeStamp2)

	//step1:设置种子数，可以设置成时间戳
	rand.Seed(time.Now().UnixNano())
	for i := 0; i < 10; i++ {
		//step2: 调用生成随机数的函数
		fmt.Println("--->", rand.Intn(100))
	}

	/*
		[15,76]
		[3,48]
			[0,45] + 3

		Intn(n) // [0,n)
	*/
	num3 := rand.Intn(46) + 3 //获取[3, 48]
	fmt.Println(num3)
}
