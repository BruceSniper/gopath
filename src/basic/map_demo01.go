package main

import "fmt"

func main() {
	/*
		map:映射，是一种专门用于存储键值对的集合，属于引用类型

		存储特点：
			A：存储的是无序的键值对
			B：键不能重复，并且和value值一一对应
				map中的key不能重复，如果重复，name新的value会覆盖原来的，程序不会报错

		语法结构：
			1.创建map
				var map1 map[key类型]value类型
					nil map, 不能直接使用

				var map2 = make(map[key类型]value类型)

				var map3 = map[key类型]value类型{key1:value1, key2:value2,...}

			2.添加/修改
				map[key] = value
					如果key不存在，就是添加数据

			3.获取
				map[key] ---> value

				value, ok := map[key]
					根据key获取对应的value值
					如果key存在，value就是对应的数据，ok为true
					如果key不存在，value就是该数据类型的默认值， ok为false

			4.删除数据
				delete(map, key)
					如果key存在，删除对应value成功
					如果key不存在，删除失败，但不会报错

			5.长度
				len(map)

		每种数据类型：
			int: 0
			float: 0.0 ---> 0
			string: ""
			array: [0000]

			slice: nil
			map: nil
	*/

	//1.创建map
	var map1 map[int]string //没有初始化，nil
	var map2 = make(map[int]string)
	var map3 = map[string]int{"Go": 98, "python": 87, "java": 79, "html": 93}
	fmt.Println(map1)
	fmt.Println(map2)
	fmt.Println(map3)

	fmt.Println(map1 == nil)
	fmt.Println(map2 == nil)
	fmt.Println(map3 == nil)

	//2.nil map
	if map1 == nil {
		map1 = make(map[int]string)
		fmt.Println(map1 == nil)
	}

	//map1[1] = "hello"		//assignment to entry in nil map

	//3.存储键值对到map中
	//map[key] = value
	map1[1] = "hello"
	map1[2] = "world"
	map1[3] = "memeda"
	map1[4] = "王二狗"
	map1[5] = "ruby"
	map1[6] = "三胖思密达"

	//4.获取数据，根据key获取对应的value值
	//若key不存在，获取的是value值的零值
	fmt.Println(map1)
	fmt.Println(map1[4])
	fmt.Println(map1[40]) //""空字符串

	v1, ok := map1[40]
	if ok {
		fmt.Println("对应的数值是：", v1)
	} else {
		fmt.Println("操作的key不存在，获取的是零值", v1)
	}

	//5.修改数据
	fmt.Println(map1)
	map1[3] = "如花"
	fmt.Println(map1)

	//6.删除数据
	delete(map1, 3)
	fmt.Println(map1)
	delete(map1, 30)
	fmt.Println(map1)

	//7.长度
	fmt.Println(len(map1))
}
