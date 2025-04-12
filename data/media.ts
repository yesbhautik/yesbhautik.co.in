export type MediaType = 'anime' | 'book' | 'movie' | 'drama' | 'game'
export type MediaState = 'done' | 'doing' | 'todo'

export interface MediaRecord {
  name: string
  creator?: string
  state?: MediaState
  date?: string
  note?: string
  lang?: string
}

export const anime: MediaRecord[] = [
  {
    name: 'Animes will be listed here soon!',
    creator: 'Anime',
    date: '2007',
  }
]

export const movie: MediaRecord[] = [
  {
    name: 'Movies will be listed here soon!',
    creator: 'Movies',
    date: '2007',
  }
]

export const book: MediaRecord[] = [
  {
    name: 'Books will be listed here soon!',
    creator: 'Books',
  }
]

export const drama: MediaRecord[] = [
  {
    name: 'Drama will be listed here soon!',
    creator: 'Drama',
  }
]

export const game: MediaRecord[] = [
  {
    name: 'Games will be listed here soon!',
    creator: 'Games',
  }
]

export const media: Record<MediaType, MediaRecord[]> = {
  anime,
  drama,
  movie,
  game,
  book,
}
