import { ProfileUser } from "./generic.types";

export interface Content {
  name: string;
  id: number;
  genres: string[];
  release_date?: string;
  first_air_date?: string;
  overview: string;
  image: string;
}

export interface Review {
  comments: string;
  date: string;
  location: string;
  rating: number;
  content: ReviewContent;
  user: ProfileUser;
  type: string;
  contentId: number;
}

export interface ReviewContent {
  genres: string[];
  image: string;
  name: string;
}
