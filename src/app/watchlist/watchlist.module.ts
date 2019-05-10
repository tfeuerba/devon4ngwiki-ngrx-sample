import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromWatchlist from './reducers';
import { WatchlistComponent } from './watchlist/watchlist.component';

@NgModule({
  declarations: [WatchlistComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('watchlist', fromWatchlist.reducers, { metaReducers: fromWatchlist.metaReducers }),
  ],
  exports: [
    WatchlistComponent
  ]
})
export class WatchlistModule { }
