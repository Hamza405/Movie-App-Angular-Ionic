import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {MoviesServiceService} from "../../services/movies-service.service"
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies =[]
  currentPage = 1
  imagesBaseUrl = environment.images;

  constructor(private moviesService: MoviesServiceService,private loadingController: LoadingController) { }

  ngOnInit() {
    this.fetchMovies()
  }

  async fetchMovies() {
    const loading =await this.loadingController.create({
      message: 'Loading ...',
      spinner: "bubbles"
    })

    await loading.present()

    this.moviesService.getMovies(this.currentPage).subscribe(res=>{
      this.movies = [...res.results]
      loading.dismiss()
      console.log(res)
    })
  }
}
