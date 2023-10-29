import { ReviewFilm } from "@/stores/review";
import { useMediaQuery } from "@/composables/mediaQueries";

// *Styles*
import "./film.scss";

// ** Components **
import Chip from "@/components/basic/chip/PPChip";

// ** Types **
interface Props {
  review: ReviewFilm;
}

const Film = ({ review }: Props) => {
  const { isMedium } = useMediaQuery();

  return (
    <div className="pp-film-container">
      <img src={review.image} className="pp-film-poster" />

      <div className="pp-film-info">
        <p className="pp-film-title pp-text-ellipsis">{review.name}</p>
        <p className="pp-film-description pp-text-ellipsis-5">
          {review.overview}
        </p>

        <div className="pp-film-chips">
          {review.genres.map((genre, i) => (
            <Chip text={genre} key={i} fontSize={isMedium ? 10 : 8} />
          ))}
        </div>

        <p className="pp-film-year">{review.release_date.split("-")[0]}</p>
      </div>
    </div>
  );
};

export default Film;
