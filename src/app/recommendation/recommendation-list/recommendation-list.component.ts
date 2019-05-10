import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/watchlist/models/movies';
import * as fromRecommendation from 'src/app/recommendation/reducers';
import * as recommendationActions from 'src/app/recommendation/actions';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.css']
})
export class RecommendationListComponent implements OnInit {

  loading$: Observable<boolean>;
  movies$: Observable<Movie[]>;

  /**
   * Ids for new watchlist items. In a real application you could dispatch an effect to
   * save the new watchlist item on the server and use the returned id. For a more fluent
   * experience, you could also first generate a UUID as a placeholder and update the id
   * once the server call succeeds.
   **/
  private idPool: number = 100;

  constructor(private store: Store<fromRecommendation.State>) {
    this.movies$ = this.store.pipe(select(fromRecommendation.getRecommendedMovies));
    this.loading$ = this.store.pipe(select(fromRecommendation.isLoadingRecommendedMovies));
   }

  ngOnInit() {
    this.store.dispatch(recommendationActions.loadRecommendedMovies);
  }

  addToWatchlist(movie: Movie) {
    this.store.dispatch(recommendationActions.addToWatchlist({ watchlistItemId: this.idPool++, movie, addedAt: new Date() }));
  }

}
