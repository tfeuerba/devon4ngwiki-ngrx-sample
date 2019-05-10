import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromWatchlist from '../reducers';
import { Observable } from 'rxjs';
import { WatchlistItem } from '../models/movies';
import * as playbackActions from 'src/app/playback/actions';

@Component({
  selector: 'app-watchlist',
  templateUrl: 'watchlist.component.html'
})
export class WatchlistComponent {
  watchlistItems$: Observable<WatchlistItem[]>;

  constructor(
    private store: Store<fromWatchlist.State>
  ) {
    this.watchlistItems$ = this.store.pipe(select(fromWatchlist.getAllItems));
  }

  stoppedPlayback(movieId: number, stoppedAtMinute: number) {
    this.store.dispatch(playbackActions.playbackFinished({ movieId, stoppedAtMinute }));
  }

}
