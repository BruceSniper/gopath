package main

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/context"
)

func main() {
	//创建app结构体对象
	app := iris.New()

	//url：http://localhost:8000/getRequest
	//type：GET请求、用GET方法处理
	app.Get("/getRequest", func(context context.Context) {
		//获取Path
		path := context.Path()
		//日志输出
		app.Logger().Info(path)
	})

	//1.处理Get请求
	app.Get("/userpath", func(context context.Context) {
		//获取Path
		path := context.Path()
		//日志输出
		app.Logger().Info(path)
		//写入返回值：string类型
		context.WriteString("请求路径：" + path)

	})

	//2.处理Get请求，并接受参数
	app.Get("/userinfo", func(context context.Context) {
		path := context.Path()
		app.Logger().Info(path)

		//获取get请求所携带的参数
		userName := context.URLParam("username")
		app.Logger().Info(userName)

		//获取get请求所携带的参数
		pwd := context.URLParam("pwd")
		app.Logger().Info(pwd)

		//返回HTML数据格式
		context.HTML("<h1>" + userName + "," + pwd + "</h1>")
	})

	//3.处理Post请求，form表单的字段获取
	app.Post("/postLogin", func(context context.Context) {
		path := context.Path()
		app.Logger().Info(path)
		//context.PostValue()方法获取post请求提交的form表单数据
		name := context.PostValue("name")
		pwd := context.PostValue("pwd")
		app.Logger().Info(name, " ", pwd)
		context.HTML(name)
	})

	//4.处理Post请求，Json格式数据
	/*
	* Postman工具选择[{"key": "Content-Type", "value": "application/json", "description": ""}]
	* 请求内容：{"name": "davie", "age": 28}
	 */
	app.Post("/postJson", func(context context.Context) {
		//1.path
		path := context.Path()
		app.Logger().Info("请求URL：", path)

		//2.Json数据解析
		var person Person
		//context.ReadJSON()
		if err := context.ReadJSON(&person); err != nil {
			panic(err.Error())
		}

		//输出：Received :main.Person{Name:"davie", Age:28}
		context.Writef("Received :%#+v\n", person)
	})

	//5.处理Post请求 XML格式数据
	/**
	 * 请求配置：Content-Type到application/xml（可选但最好设置）
	 * 请求内容：
	 *
	 *  <student>
	 *		<stu_name>davie</stu_name>
	 *		<stu_age>28</stu_age>
	 *	</student>
	 *
	 */
	app.Post("/postXml", func(context context.Context) {
		//1.Path
		path := context.Path()
		app.Logger().Info("请求URL：", path)

		//2.XML数据解析
		var student Student
		if err := context.ReadXML(&student); err != nil {
			panic(err.Error())
		}

		//输出：Received :main.Student{StuName:"davie", StuAge:28}
		context.Writef("Received :%#+v\n", student)
	})

	//启动端口监听服务
	app.Run(iris.Addr(":8000"), iris.WithoutServerError(iris.ErrServerClosed))

}

//自定义的struct
type Person struct {
	Name string `json:"name"`
	Age  int    `json:"age"`
}

//自定义的结构体
type Student struct {
	//XMLName xml.Name `xml:"student"`
	StuName string `xml:"stu_name"`
	StuAge  int    `xml:"stu_age"`
}
