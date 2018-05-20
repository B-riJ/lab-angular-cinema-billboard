import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

//create a function to display one movie
// then need to create routes and params (import ActivatedRoute-> to use params)
 theMovie: any ={}


  constructor(private route: ActivatedRoute,
  private myService: MovieService) { }

  ngOnInit() {
    this.route.params
    //to grab someting out of params
    // params= placeholder
    .subscribe((params) => {
    const theID = Number(params['id']);
    this.theMovie = this.myService.getMovie(theID)
  })
    
  

  }
}