import { Component, EnvironmentInjector, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
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

  async fetchMovies(event?: InfiniteScrollCustomEvent) {
    const loading =await this.loadingController.create({
      message: 'Loading ...',
      spinner: "bubbles"
    })

    await loading.present()

    this.moviesService.getMovies(this.currentPage).subscribe(res=>{
      this.movies.push(...res.results);
      loading.dismiss()
      console.log(res)
      event?.target.complete()
    })
    
  }

  loadMore(event: any) {
    this.currentPage++;
    this.fetchMovies(event)
  }
}
