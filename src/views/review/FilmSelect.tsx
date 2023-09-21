import { useReviewStore } from "@/stores/review";
import { useState } from "react";
import { debounce } from "@/composables/generic";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// ** Styles **
import "./review.scss";

// ** Components **
import PPAutoComplete, {
  SelectOption,
} from "@/components/basic/input/select/PPAutocomplete";
import Navbar from "@/components/navbar/Navbar";

const FilmSelect = () => {
  const navigate = useNavigate();
  const { progress, review, setFilm } = useReviewStore();

  const [options, setOptions] = useState<SelectOption[]>([]);

  const movieSearch = debounce(async (term: string): Promise<void> => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${term}&language=en-US&page=1`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      }
    );

    setOptions(
      res.data.results.map((result: any) => ({
        text: result.title,
        value: result.id,
      }))
    );
  }, 300);

  const matchingFilm = (id: number): any => {
    const film = options.find((option: SelectOption) => option.value === id);

    return {
      name: film?.text || "",
      id: film?.value || 0,
    };
  };

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

      <div className="review">
        <h2>Select a film</h2>

        <PPAutoComplete
          label="Film"
          selectedOption={review.film.name}
          setSelectedOption={(id: number) => {
            setFilm(matchingFilm(id));
            navigate("/review/review");
          }}
          options={options}
          setSearchTerm={movieSearch}
        />
      </div>
    </>
  );
};

export default FilmSelect;
