import { Song } from "./SongInterface";

export interface Album {
  id: number;
  title: string;
  artist: string;
  releaseDate: string;
  coverImage: string;
  songs: Song[];
};
