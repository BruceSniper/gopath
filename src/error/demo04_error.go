package main

import (
	"fmt"
	"path/filepath"
)

func main() {
	files, _ := filepath.Glob("[")
	//if err != nil && err == filepath.ErrBadPattern{
	//	fmt.Println(err)
	//	return
	//}
	fmt.Println("files:", files)
}
