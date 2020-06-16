package main

import (
	"fmt"
	"os"
)

func main() {
	/*
		FileInfo:文件信息
			interface
				Name()，文件名
	*/
	fileInfo, err := os.Stat("D:/apple id .txt")
	if err != nil {
		fmt.Println("err:", err)
		return
	}
	fmt.Printf("%T\n", fileInfo) //*os.fileStat

	//文件名
	fmt.Println(fileInfo.Name())
	//文件大小
	fmt.Println(fileInfo.Size())
	//是否是目录
	fmt.Println(fileInfo.IsDir()) //IsDirectory 是否为文件夹
	//修改时间
	fmt.Println(fileInfo.ModTime())
	//权限
	fmt.Println(fileInfo.Mode()) //-rw-rw-rw-
}
