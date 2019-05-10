import { createAction, props, union } from '@ngrx/store';

export const playbackFinished = createAction('[Playback] Playback finished', props<{ movieId: number, stoppedAtMinute: number }>());

const actions = union({
    playbackFinished
});

export type ActionsUnion = typeof actions;
