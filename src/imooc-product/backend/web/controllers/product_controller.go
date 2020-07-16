package controllers

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/mvc"
	"imooc-product/common"
	"imooc-product/datamodels"
	"imooc-product/services"
)

type ProductController struct {
	Ctx            iris.Context //上下文
	ProductService services.IProductService
}

//获取所有商品
func (p *ProductController) GetAll() mvc.View {
	productArray, _ := p.ProductService.GetAllProduct()
	return mvc.View{
		Name:"product/view.html",
		Data:iris.Map{
			"productArray":productArray,
		},
	}
}

func (p *ProductController) PostUpdate() {
	product := &datamodels.Product{}
	p.Ctx.Request().ParseForm()
	dec := common.NewDecoder(&common.D)
}