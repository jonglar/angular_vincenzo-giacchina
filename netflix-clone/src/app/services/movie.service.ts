import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const enum endpoint {
  latest = '/movies/latest',
  now_playing = '/movies/now_playing',
  popular = '/movies/popular',
  top_rated = '/movies/top_rated',
  upcoming = '/movies/upcoming',
  trending = '/trending/all/week',
  originals = '/discover/tv',
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private URL = 'https://api.themoviedb.org/3';

  constructor(private http:HttpClient) { }
}
