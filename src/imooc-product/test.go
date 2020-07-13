package main

import (
	"imooc-product/common"
	"imooc-product/datamodels"
)

func main() {
	data := map[string]string{"ID": "1", "productName": "imooc 测试结构体", "productNum": "2", "productImage": "123", "productUrl": "https://url"}
	product := &datamodels.Product{}
	common.DataToStructByTagSql(data, product)
}
