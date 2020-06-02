package main

import "fmt"

func main() {
	/*
		函数的返回值：
			一个函数的执行结果，返回给函数的调用处。执行结果就叫做函数的返回值

		return语句：
			一个函数的定义上有返回值，那么函数中必须使用return语句，将结果返回给调用处
			函数值返回的结果，必须和函数定义的一致：类型，个数，顺序

			1.将函数的结果返回给调用处
			2.同时结束了该函数的执行

		空白标识符，专门用来舍弃数据：_
	*/

	//1.设计一个函数，用于求1-10的和，将结果在主函数中打印输出
	res := getSum()
	fmt.Println("1-10的和是：", res)

	fmt.Println(getSum2())

	res1, res2 := rectangle(5, 3)
	fmt.Println("周长：", res1, "面积：", res2)

	res3, res4 := rectangle2(5, 3)
	fmt.Println("周长：", res3, "面积：", res4)

	res5, _ := rectangle(5, 3)
	fmt.Println(res5)

	_, res6 := rectangle(5, 3)
	fmt.Println(res6)
}

//定义一个函数，带返回值
func getSum() int {
	sum := 0
	for i := 1; i <= 10; i++ {
		sum += i
	}
	//fmt.Printf("1-10的和是：%d\n", sum)
	return sum
}

//定义函数时，指明要返回的数据是哪一个
func getSum2() (sum int) {
	for i := 1; i <= 100; i++ {
		sum += i
	}
	return
}

//函数，用于求举行的周长和面积
func rectangle(len, wid float64) (float64, float64) {
	perimeter := (len + wid) * 2
	area := len * wid
	return perimeter, area
}

func rectangle2(len, wid float64) (peri float64, area float64) {
	peri = (len + wid) * 2
	area = len * wid
	return
}
