import { Album } from "src/interface/AlbumInterface";

export const albums: Album[] = [
  {
    id: 1,
    title: "Album 1",
    artist: "Artista 1",
    releaseDate: "2022-01-01",
    coverImage: "https://url.com/album1-cover.jpg",
    songs: [
      {
        id: 1,
        title: "Canción 1",
        duration: 180,
        trackNumber: 1,
      },
      {
        id: 2,
        title: "Canción 2",
        duration: 240,
        trackNumber: 2,
      },
      {
        id: 3,
        title: "Canción 3",
        duration: 200,
        trackNumber: 3,
      },
    ],
  },
  {
    id: 2,
    title: "Album 2",
    artist: "Artista 2",
    releaseDate: "2022-02-01",
    coverImage: "https://url.com/album2-cover.jpg",
    songs: [
      {
        id: 4,
        title: "Canción 4",
        duration: 220,
        trackNumber: 1,
      },
      {
        id: 5,
        title: "Canción 5",
        duration: 260,
        trackNumber: 2,
      },
      {
        id: 6,
        title: "Canción 6",
        duration: 190,
        trackNumber: 3,
      },
    ],
  },
];
