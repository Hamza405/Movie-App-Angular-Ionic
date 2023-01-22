import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviesDetailsPageRoutingModule } from './movies-details-routing.module';

import { MoviesDetailsPage } from './movies-details.page';
import { ActivatedRoute } from '@angular/router';
import { MoviesServiceService } from 'src/app/services/movies-service.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesDetailsPageRoutingModule
  ],
  declarations: [MoviesDetailsPage]
})
export class MoviesDetailsPageModule {

  


}
