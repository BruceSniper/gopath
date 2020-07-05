package datasource

import (
	"github.com/kataras/iris"
	"github.com/kataras/iris/sessions/sessiondb/redis"
	"irisDemo/QianFengCmsProject/config"
)

/**
 * 返回Redis实例
 */
func NewRedis() *redis.Database {
	var database1 *redis.Database

	//项目配置
	cmsConfig := config.InitConfig()
	if cmsConfig != nil {
		iris.New().Logger().Info(" hello ")
		rd := cmsConfig.Redis
		iris.New().Logger().Info(rd)
		database1 = redis.New(redis.Config{
			Network:   rd.NetWork,
			Addr:      rd.Addr + ":" + rd.Port,
			Password:  rd.Password,
			Database:  "",
			MaxActive: 10,
			Timeout:   0,
			Prefix:    rd.Prefix,
		})
	} else {
		iris.New().Logger().Info(" hello  error ")
	}
	return database1
}
