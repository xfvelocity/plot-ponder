import { ReviewFilm } from "@/stores/review";

// *Styles*
import "./film.scss";

// ** Components **
import Chip from "../basic/chip/PPChip";

// ** Types **
interface Props {
  review: ReviewFilm;
}

const Film = ({ review }: Props) => {
  return (
    <div className="pp-film-container">
      <img src={review.image} className="pp-film-poster" />

      <div className="pp-film-info">
        <p className="pp-film-title">{review.name}</p>
        <p className="pp-film-description pp-text-ellipsis-5">
          {review.overview}
        </p>

        <div className="pp-film-chips">
          {review.genres.map((genre, i) => (
            <Chip text={genre} key={i} />
          ))}
        </div>

        <p className="pp-film-year">{review.release_date.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default Film;
