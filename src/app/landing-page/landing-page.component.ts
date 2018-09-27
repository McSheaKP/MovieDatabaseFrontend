import { Component, OnInit } from '@angular/core';
import { MoviedbService} from '../moviedb.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private _mdbs: MoviedbService ) { }
  movies: any;
  ngOnInit() {
    this._mdbs.getData()
      .subscribe( (res: any ) => {
        console.log("loggin the response", res);
        this.movies = res.results;
        console.log("http://image.tmdb.org/t/p/w500" + this.movies[0].poster_path)
      })
  
  }


}
