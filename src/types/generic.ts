export interface ProfileUser {
  name: string;
  username: string;
  uuid: string;
  avatar: string;
}

export interface Review {
  comments: string;
  date: string;
  location: string;
  rating: number;
  film: ReviewFilm;
  user: ProfileUser;
}

export interface ReviewFilm {
  genres: string[];
  image: string;
  name: string;
}
