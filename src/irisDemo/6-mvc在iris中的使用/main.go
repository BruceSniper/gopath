package main

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
)

func main() {
	app := iris.New()

	//设置自定义控制器
	mvc.New(app).Handle(new(UserController))

	//路由组的mvc处理
	mvc.Configure(app.Party("/user"), func(context *mvc.Application) {
		context.Handle(new(UserController))
	})

	app.Run(iris.Addr(":8000"))
}

type UserController struct {
}

/*
 * url：http://localhost:8000
 * type：get
 */
func (uc *UserController) Get() string {
	//打印日志
	iris.New().Logger().Info(" Get 请求 ")
	return "hell world"
}

/*
 * url：http://localhost:8000
 * type：post
 */
func (uc *UserController) Post() {
	iris.New().Logger().Info(" post 请求 ")
}

/*
 * url：http://localhost:8000
 * type：put
 */

func (uc *UserController) Put() {
	iris.New().Logger().Info(" put 请求 ")
}

/*
 * url：http://localhost:8000/info
 * type：get
 */

//Get+url 作为方法自动识别出请求方式和url名称，自动匹配
func (uc *UserController) GetInfo() mvc.Result {
	iris.New().Logger().Info(" get 请求, 请求路径为info ")
	return mvc.Response{
		Object: map[string]interface{}{
			"code":    1,
			"message": "请求成功",
		},
	}
}

/**
 * url： http://localhost:8000/query
 * type：get
 */
func (uc *UserController) BeforeActivation(a mvc.BeforeActivation) {
	a.Handle("GET", "/query", "UserInfo")
}

func (uc *UserController) UserInfo() mvc.Result {
	//todo
	iris.New().Logger().Info(" user info query ")
	return mvc.Response{}
}
