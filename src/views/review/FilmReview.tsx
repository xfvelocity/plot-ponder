import { useReviewStore } from "@/stores/review";
import { useEffect } from "react";
import axios from "axios";

import Navbar from "@/components/navbar/Navbar";
import PPFilm from "@/components/film/ppFilm";

const FilmReview = () => {
  const { progress, film, setFilm } = useReviewStore();

  const getMovieDetails = async (): Promise<void> => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${film.id}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      }
    );

    const { title, id, genres, release_date, overview, poster_path } = res.data;

    setFilm({
      name: title,
      id,
      genres: genres.map((x: any) => x.name),
      release_date,
      overview,
      image: `https://image.tmdb.org/t/p/original${poster_path}`,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <>
      <Navbar
        title="Review"
        progress={{
          current: progress,
          total: 2,
        }}
        showBackBtn
      />

      <PPFilm review={film} />
    </>
  );
};

export default FilmReview;
