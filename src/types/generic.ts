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
  content: ReviewContent;
  user: ProfileUser;
  type: string;
}

export interface ReviewContent {
  genres: string[];
  image: string;
  name: string;
}
