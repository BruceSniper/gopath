package main

import "fmt"

func main() {
	/*
		数组的遍历：
			依次访问数组中的元素
			方法一：arr[0],arr[1]...

			方法二：通过循环，配合下标
				for i := 0; i < len(arr); i++ {
					arr[i]
				}

			方法三：使用range
				range，词义“范围”
				不需要操作数组的下标，到达数组的末尾，自动结束for range循环
					每次从数组中获取下标和对应的数值

	*/
	arr1 := [5]int{1, 2, 3, 4, 5}

	for i := 0; i < len(arr1); i++ {
		arr1[i] = i*2 + 1
		fmt.Println(arr1[i])
	}
	fmt.Println(arr1)

	fmt.Println("---------------")

	for index, value := range arr1 {
		fmt.Printf("下标是：%d，数值是：%d\n", index, value)
	}

	sum := 0
	for _, value := range arr1 {
		sum += value
	}
	fmt.Println(sum)
}
