import { ReviewFilm } from "@/stores/review";

// *Styles*
import "./ppFilm.scss";

import Chip from "../basic/chip/chip";

interface Props {
  review: ReviewFilm;
}

const PPFilm = ({ review }: Props) => {
  return (
    <div className="pp-film-container">
      <img src={review.image} className="pp-film-poster" />

      <div className="pp-film-info">
        <p className="pp-film-title">{review.name}</p>
        <p className="pp-film-description pp-text-ellipsis-5">
          {review.overview}
        </p>

        <div className="pp-film-chip-container">
          {review.genres.map((genre, i) => (
            <Chip text={genre} key={i} />
          ))}

          <p className="pp-film-year">{review.release_date.split("-")[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default PPFilm;
