package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	/*
		bufio:高效io读写
			buffer缓存
			io: input/output

		将io包下的Reader，Write对象进行包装，带缓存的包装，提高读写的效率

			func (b *Writer) Write(p []byte) (nn int,err error)
			func (b *Writer) WriteByte(c byte) error
			func (b *Writer) WriteRune(r rune) (size int, err error)
			func (b *Writer) WriteString(s string) (int, error)
	*/
	fileName := "E:/gopath/src/l_file/cc.txt"
	file, err := os.OpenFile(fileName, os.O_CREATE|os.O_WRONLY, os.ModePerm)
	if err != nil {
		fmt.Println(err)
		return
	}
	defer file.Close()

	w1 := bufio.NewWriter(file)
	/*
		闪存容量(4096)大于数据量的情况
	*/
	//n,err := w1.WriteString("Hello world")
	//fmt.Println(err)
	//fmt.Println(n)
	//w1.Flush() //手动刷新缓冲区，将缓冲区内的数据写入到文件中

	/*
		闪存容量(4096)小于数据量的情况
	*/
	for i := 1; i <= 1000; i++ {
		w1.WriteString(fmt.Sprintf("%d:hello", i))
	}
	w1.Flush()
}
