package controllers

import (
	"github.com/kataras/iris/mvc"
	"imooc-iris/repositories"
	"imooc-iris/services"
)

type MovieController struct {
}

func (c *MovieController) Get() mvc.View {
	movieRepository := repositories.NewMovieManger()
	movieService := services.NewMovieServiceManger(movieRepository)
	movieResult := movieService.ShowMovieName()
	return mvc.View{
		Name: "movie/index.html",
		Data: movieResult,
	}
}
