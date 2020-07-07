package main

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
	"imooc-iris/web/controllers"
)

func main() {
	app := iris.New()
	app.Logger().SetLevel("debug")
	//注册模板
	app.RegisterView(iris.HTML("./web/views", ".html"))
	//注册控制器
	mvc.New(app.Party("/hello")).Handle(new(controllers.MovieController))
	app.Run(
		iris.Addr(":8080"),
	)
}
