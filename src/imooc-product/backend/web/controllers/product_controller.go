package controllers

import (
	"github.com/kataras/iris"
	"imooc-iris/services"
)

type ProductController struct {
	Ctx            iris.Context
	ProductService services.IProductService
}
