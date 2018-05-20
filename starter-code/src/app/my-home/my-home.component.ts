import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router } from "@angular/router";
//brought in Routes
@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  allTheMovies: Array<any> = [];
  //adding movie services(pg)
  constructor(private myService: MovieService,
  private myRouter: Router) { }

  gotToMoviePage(theIDArgument){
    this.myRouter.navigate(['/movies', theIDArgument])
  }

  ngOnInit() {
    this.allTheMovies = this.myService.getMovies();
  }

}
