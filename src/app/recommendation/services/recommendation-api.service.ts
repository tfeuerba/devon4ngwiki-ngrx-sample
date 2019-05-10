import { Injectable } from '@angular/core';
import { Movie } from 'src/app/watchlist/models/movies';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecommendationApiService {

  private readonly recommendedMovies: Movie[] = [
    {
      id: 2,
      title: 'The Hunger Games',
      genre: 'sci-fi',
      releaseYear: 2012,
      runtimeMinutes: 144
    },
    {
      id: 4,
      title: 'Avengers: Endgame',
      genre: 'fantasy',
      releaseYear: 2019,
      runtimeMinutes: 181
    }
  ];

  loadRecommendedMovies(): Observable<Movie[]> {
    return of(this.recommendedMovies).pipe(delay(1000));
  }
}
