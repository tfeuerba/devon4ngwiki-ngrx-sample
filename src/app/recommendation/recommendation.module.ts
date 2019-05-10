import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromRecommendation from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { RecommendationEffects } from './recommendation.effects';

@NgModule({
  declarations: [RecommendationListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('recommendation', fromRecommendation.reducers, { metaReducers: fromRecommendation.metaReducers }),
    EffectsModule.forFeature([RecommendationEffects])
  ],
  exports: [
    RecommendationListComponent
  ]
})
export class RecommendationModule { }
