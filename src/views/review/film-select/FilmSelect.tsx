import { useReviewStore } from "@/stores/review";
import { useState } from "react";
import { debounce } from "@/composables/generic";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// ** Styles **
import "./filmSelect.scss";

// ** Components **
import PPAutoComplete, {
  SelectOption,
} from "@/components/basic/input/autocomplete/PPAutocomplete";
import Navbar from "@/components/navbar/Navbar";

const FilmSelect = () => {
  const navigate = useNavigate();

  const config = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  };

  const { film, setFilm } = useReviewStore();

  const [options, setOptions] = useState<SelectOption[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const movieSearch = debounce(async (term: string): Promise<void> => {
    setLoading(true);

    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${term}&language=en-US&page=1`,
      config
    );

    setOptions(
      res.data.results.map((result: any) => ({
        text: result.title,
        value: result.id,
      }))
    );

    setLoading(false);
  }, 300);

  const movieSelected = async (movieId: number): Promise<void> => {
    setLoading(true);

    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      config
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

    setLoading(false);

    navigate("/review/review");
  };

  return (
    <>
      <Navbar title="Select a film" showBackBtn />

      <div className="film-select pp-max-width">
        <PPAutoComplete
          label="Search for a film"
          selectedOption={film.name}
          setSelectedOption={(id: number) => movieSelected(id)}
          options={options}
          loading={loading}
          setSearchTerm={movieSearch}
        />
      </div>
    </>
  );
};

export default FilmSelect;
