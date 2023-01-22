import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.page.html',
  styleUrls: ['./movies-details.page.scss'],
})
export class MoviesDetailsPage implements OnInit {
  movie = null;
  imagesBaseUrl = environment.images
  constructor(private route:ActivatedRoute,private movieService: MoviesServiceService,private loadingController: LoadingController){}

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    const loading = await this.loadingController.create({
      spinner:"bubbles",
    })
    await loading.present()
    this.movieService.getMovieDetails(id).subscribe(res => {
     loading.dismiss()
     this.movie = res;
    })
  }
}
