import { useReviewStore } from "@/stores/review";
import { useState } from "react";

// ** Components **
import Navbar from "@/components/navbar/Navbar";
import Film from "@/components/film/Film";
import PPSelect from "@/components/basic/input/select/PPSelect";
import PPTextArea from "@/components/basic/input/text-area/PPTextArea";
import PPButton from "@/components/basic/button/PPButton";
import PPTextInput from "@/components/basic/input/text-input/PPTextInput";

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
  const { progress, film } = useReviewStore();

  const [rating, setRating] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [watched, setWatched] = useState<string>("");

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

      <div className="film">
        <Film review={film} />

        <div className="film-review">
          <h2>What did you think?</h2>

          <div className="film-review-content">
            <PPTextInput label="Rating" value={rating} setValue={setRating} />
            <PPTextInput label="Date" value={date} setValue={setDate} />

            <PPSelect
              label="Where did you watch this?"
              options={options}
              selectedOption={watched}
              setSelectedOption={setWatched}
            />

            <PPTextArea
              label="Comments"
              value={comments}
              setValue={setComments}
            />
          </div>
        </div>

        <div className="film-review-btn">
          <PPButton text="Submit" width={250} />
        </div>
      </div>
    </>
  );
};

export default FilmReview;
