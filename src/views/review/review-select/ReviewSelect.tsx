import { useReviewStore } from "@/stores/review";
import { useState } from "react";
import { debounce } from "@/composables/generic";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

// ** Styles **
import "./reviewSelect.scss";

// ** Components **
import PPAutoComplete, {
  SelectOption,
} from "@/components/basic/input/autocomplete/PPAutocomplete";
import Navbar from "@/components/navbar/Navbar";

const ReviewSelect = () => {
  const navigate = useNavigate();
  const { reviewType } = useParams();

  // ** Data **
  const config = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
    },
  };

  const { content, setContent } = useReviewStore();

  const [options, setOptions] = useState<SelectOption[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // ** Methods **
  const contentSearch = debounce(async (term: string): Promise<void> => {
    setLoading(true);

    const type = reviewType === "film" ? "movie" : "tv";
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/${type}?query=${term}&language=en-US&page=1`,
      config
    );

    setOptions(
      res.data.results.map((result: any) => ({
        text: result.title || result.name,
        value: result.id,
      }))
    );

    setLoading(false);
  }, 300);

  const contentSelected = async (contentId: number): Promise<void> => {
    setLoading(true);

    const type = reviewType === "film" ? "movie" : "tv";
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${contentId}`,
      config
    );

    const { title, id, genres, release_date, overview, poster_path } = res.data;

    setContent({
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
      <Navbar
        title={`What ${reviewType} would you like to review?`}
        showBackBtn
      />

      <div className="review-select pp-max-width">
        <PPAutoComplete
          label={`Search for a ${reviewType}`}
          selectedOption={content.name}
          setSelectedOption={(id: number) => contentSelected(id)}
          options={options}
          loading={loading}
          setSearchTerm={contentSearch}
        />
      </div>
    </>
  );
};

export default ReviewSelect;
