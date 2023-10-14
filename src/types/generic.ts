export interface ProfileUser {
  name: string;
  username: string;
  uuid: string;
}

export interface Review {
  comments: string;
  date: string;
  location: string;
  rating: number;
  userUuid: string;
  film: ReviewFilm;
}

export interface ReviewFilm {
  genres: string[];
  image: string;
  name: string;
}
