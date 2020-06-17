package main

import (
	"fmt"
	"io"
	"log"
	"os"
)

func main() {
	/*
		Seek(offset int64, where int) (int64, err)，设置指针光标的位置
			第一个位置：偏移量
			第二个位置：如何设置
				0: seekstart，表示相对于文件开始
				1：seekcurrent，表示相对于当前位置的偏移量
				2：seekend，表示相对于末尾
	*/
	fileName := "E:/gopath/src/l_file/aa.txt"
	file, err := os.OpenFile(fileName, os.O_RDWR, os.ModePerm)
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	//读写
	bs := []byte{0}
	file.Read(bs)
	fmt.Println(string(bs))

	file.Seek(4, io.SeekStart)
	file.Read(bs)
	fmt.Println(string(bs))

	file.Seek(2, 0) //SeekStart
	file.Read(bs)
	fmt.Println(string(bs))

	file.Seek(3, io.SeekCurrent)
	file.Read(bs)
	fmt.Println(string(bs))

	file.Seek(0, io.SeekEnd)
	file.WriteString("ABC")
}
