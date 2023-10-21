import { useReviewStore } from "@/stores/review";
import { useState } from "react";
import { useNavigate } from "react-router";
import { api } from "@/api";

// ** Components **
import Navbar from "@/components/navbar/Navbar";
import Film from "@/components/film/Film";
import PPSelect from "@/components/basic/input/select/PPSelect";
import PPTextArea from "@/components/basic/input/text-area/PPTextArea";
import PPButton from "@/components/basic/button/PPButton";
import PPDatePicker from "@/components/basic/date-picker/PPDatePicker";
import PPSlider from "@/components/basic/slider/PPSlider";

const options = [
  {
    text: "Cinema",
    value: "cinema",
  },
  {
    text: "At home",
    value: "atHome",
  },
];

const FilmReview = () => {
  const navigate = useNavigate();

  const { progress, film, reset, resetFilm } = useReviewStore();

  // ** Data **
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  // ** Methods **
  const submitFilm = async (): Promise<void> => {
    setLoading(true);

    const res = await api("POST", "/review", {
      filmId: film.id,
      rating,
      comments,
      date: new Date(date),
      location,
    });

    setLoading(false);

    if (!res?.error) {
      navigate("/");
      reset();
    }
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
        backFn={resetFilm}
      />

      <div className="film">
        <Film review={film} />

        <div className="film-review">
          <h2>What did you think?</h2>

          <div className="film-review-content">
            <PPSlider value={rating} setValue={setRating} />
            <PPDatePicker date={date} setDate={setDate} />

            <PPSelect
              label="Where did you watch this?"
              options={options}
              selectedOption={location}
              setSelectedOption={setLocation}
            />

            <PPTextArea
              label="Comments"
              value={comments}
              rows={5}
              setValue={setComments}
            />
          </div>
        </div>

        <div className="film-review-btn">
          <PPButton
            text="Submit"
            loading={loading}
            width={250}
            onClick={submitFilm}
          />
        </div>
      </div>
    </>
  );
};

export default FilmReview;
