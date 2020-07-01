package main

import (
	"fmt"
	_ "github.com/go-sql-driver/mysql" //不能忘记导入
	"xorm.io/xorm"
	"xorm.io/xorm/log"
)

func main() {
	//1.创建数据库引擎对象
	engine, err := xorm.NewEngine("mysql", "root:1892@/testcms?charset=utf8")
	if err != nil {
		panic(err.Error())
	}

	//2.数据库引擎关闭
	defer engine.Close()

	//数据库引擎设置
	engine.ShowSQL(true)                    //设置显示SQL语句
	engine.Logger().SetLevel(log.LOG_DEBUG) //设置日志级别
	engine.SetMaxOpenConns(10)              //设置最大连接数

	engine.Sync(new(Person)) //根据定义好的结构体在数据库里创建好对应的字段，建议用Sync2，可以同时实例化多个结构体对象

	//查询表的所有数据
	session := engine.Table("user")
	count, err := session.Count()
	if err != nil {
		panic(err.Error())
	}
	fmt.Println(count)

}

type Person struct {
	Age  int
	Name string
}
