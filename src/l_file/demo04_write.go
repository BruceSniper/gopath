package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
	/*
		写出数据：
	*/
	fileName := "E:/gopath/src/l_file/ab.txt"

	//step1：打开文件
	//file, err := os.Open(fileName)
	file, err := os.OpenFile(fileName, os.O_CREATE|os.O_WRONLY, os.ModePerm)
	if err != nil {
		fmt.Println(err)
		return
	}
	//step3：关闭文件
	defer file.Close()

	//step2：写出数据
	bs := []byte{65, 66, 67, 68, 69, 70} //A, B, C, D, E, F
	n, err := file.Write(bs)
	fmt.Println(n)
	HandleErr(err)

}

func HandleErr(err error) {
	if err != nil {
		log.Fatal(err)
	}
}
