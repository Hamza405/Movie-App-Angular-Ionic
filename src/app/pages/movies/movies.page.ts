import { Component, OnInit } from '@angular/core';
import {MoviesServiceService} from "../../services/movies-service.service"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(private moviesService: MoviesServiceService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(res=>{
      console.log(res)
    })
  }
}
