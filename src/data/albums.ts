import { Album } from "src/interface/AlbumInterface";

export const albums: Album[] = [
  {
    id: 1,
    title: "Is This It",
    artist: "The Strokes",
    releaseDate: "27-08-2001",
    coverImage: "https://raw.githubusercontent.com/IronBeagle70/first-angular/main/src/assets/images/is-this-it.jpg",
    songs: [
      {
        id: 1,
        title: "Last Nite",
        duration: "3:13",
        trackNumber: 1,
      },
      {
        id: 2,
        title: "Trying Your Luck",
        duration: "3:22",
        trackNumber: 2,
      },
      {
        id: 3,
        title: "Hard to Explain",
        duration: "3:44",
        trackNumber: 3,
      },
    ],
  },
  {
    id: 2,
    title: "Room on Fire",
    artist: "The Strokes",
    releaseDate: "28-10-2003",
    coverImage: "https://raw.githubusercontent.com/IronBeagle70/first-angular/main/src/assets/images/room.jpg",
    songs: [
      {
        id: 4,
        title: "Reptilia",
        duration: "3:39",
        trackNumber: 1,
      },
      {
        id: 5,
        title: "Under Control",
        duration: "3:07",
        trackNumber: 2,
      },
      {
        id: 6,
        title: "Automatic Stop",
        duration: "3:27",
        trackNumber: 3,
      },
    ],
  },
  {
    id: 3,
    title: "First Impressions of Earth",
    artist: "The Strokes",
    releaseDate: "03-01-2006",
    coverImage: "https://raw.githubusercontent.com/IronBeagle70/first-angular/main/src/assets/images/The-Strokes-First-Impressions-of-Earth.jpg",
    songs: [
      {
        id: 7,
        title: "Ize of the World",
        duration: "4:25",
        trackNumber: 1,
      },
      {
        id: 8,
        title: "You Only Live Once",
        duration: "3:09",
        trackNumber: 2,
      },
    ],
  },
  {
    id: 4,
    title: "Angles",
    artist: "The Strokes",
    releaseDate: "22-03-2011",
    coverImage: "https://raw.githubusercontent.com/IronBeagle70/first-angular/main/src/assets/images/angles.jpg",
    songs: [
      {
        id: 9,
        title: "Under Cover of Darkness",
        duration: "3:55",
        trackNumber: 1,
      },
    ],
  },
  {
    id: 5,
    title: "Comedown Machine",
    artist: "The Strokes",
    releaseDate: "26-03-2013",
    coverImage: "https://raw.githubusercontent.com/IronBeagle70/first-angular/main/src/assets/images/strokesrca.jpg",
    songs: [
      {
        id: 10,
        title: "Chances",
        duration: "3:36",
        trackNumber: 1,
      },
      {
        id: 11,
        title: "Happy Ending",
        duration: "2:52",
        trackNumber: 2,
      }
    ],
  },
  {
    id: 6,
    title: "The New Abnormal",
    artist: "The Strokes",
    releaseDate: "10-04-2020",
    coverImage: "https://raw.githubusercontent.com/IronBeagle70/first-angular/main/src/assets/images/The-Strokes-The-New-Abnormal.jpg",
    songs: [
      {
        id: 12,
        title: "The Adults Are Talking",
        duration: "5:09",
        trackNumber: 1,
      },
      {
        id: 13,
        title: "At the Door",
        duration: "5:10",
        trackNumber: 2,
      },
    ],
  },
];
