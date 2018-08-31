import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  constructor() { }

  //Api: https://api.themoviedb.org/3/movie/550?api_key=14c47bc2bb1b6bc3d2eb2d0255da239f

  nowPlaying = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
  api_key = "14c47bc2bb1b6bc3d2eb2d0255da239f";
  nowPlayingTail = "&language=en-US&page=1&region=US";
  getData(){
    console.log(this.nowPlaying + this.api_key + this.nowPlayingTail);
    return this.http.get(this.nowPlaying + this.api_key + this.nowPlayingTail);
  }
}