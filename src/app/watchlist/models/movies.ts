export interface Movie {
    id: number;
    title: string;
    releaseYear: number;
    runtimeMinutes: number;
    genre: Genre;
}

export type Genre = 'action' | 'fantasy' | 'sci-fi' | 'romantic' | 'comedy' | 'mystery';

export interface WatchlistItem {
    id: number;
    movie: Movie;
    added: Date;
    playbackMinutes: number;
}
