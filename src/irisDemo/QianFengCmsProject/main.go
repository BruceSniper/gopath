package main

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/context"
	"github.com/kataras/iris/sessions"
	"irisDemo/QianFengCmsProject/config"
	"time"
)

/*
	程序主入口
*/

func main() {

	//创建一个服务app
	app := newApp()

	//应用App设置
	configation(app)

	//路由设置
	mvcHandle(app)

	config := config.IniConfig()
	addr := ":" + config.Port
	app.Run(
		iris.Addr(addr), //在端口8000进行监听
		iris.WithoutServerError(iris.ErrServerClosed), //无服务错误提示
		iris.WithOptimizations,                        //对json数据序列化更快的配置
	)
}

//构建App
func newApp() *iris.Application {
	app := iris.New()

	//设置日志级别  开发阶段为debug
	app.Logger().SetLevel("debug")

	//注册静态资源("app.StaticWeb"-->"app.HandleDir")
	app.HandleDir("/static", "./static")

	//注册视图文件
	app.RegisterView(iris.HTML("./static", ".html"))
	app.Get("/", func(ctx context.Context) {
		ctx.View("index.html")
	})

	return app
}

func configation(app *iris.Application) {

	//配置 字符编码
	app.Configure(iris.WithConfiguration(iris.Configuration{
		Charset: "UTF-8",
	}))

	//错误配置
	app.OnErrorCode(iris.StatusNotFound, func(ctx context.Context) {
		ctx.JSON(iris.Map{
			"errmsg": iris.StatusNotFound, //404
			"msg":    " not found ",
			"data":   iris.Map{},
		})
	})

	app.OnErrorCode(iris.StatusInternalServerError, func(ctx context.Context) {
		ctx.JSON(iris.Map{
			"errmsg": iris.StatusInternalServerError, //500
			"msg":    " not found ",
			"data":   iris.Map{},
		})
	})
}

/**
 * MVC 架构模式处理
 */
func mvcHandle(app *iris.Application) {
	//启用session
	sessManager := sessions.New(sessions.Config{
		Cookie:  "sessioncookie",
		Expires: 24 * time.Hour,
	})

	//todo
	//engine := datasource.NewMysqlEngine()
}
