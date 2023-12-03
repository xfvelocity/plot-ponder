import { ReviewContent } from "@/stores/review";
import { useMediaQuery } from "@/composables/mediaQueries";

// *Styles*
import "./content.scss";

// ** Components **
import Chip from "@/components/basic/chip/PPChip";

// ** Types **
interface Props {
  review: ReviewContent;
}

const Content = ({ review }: Props) => {
  const { isMedium } = useMediaQuery();

  return (
    <div className="pp-content-container">
      <img src={review.image} className="pp-content-poster" />

      <div className="pp-content-info">
        <p className="pp-content-title pp-text-ellipsis">{review.name}</p>
        <p className="pp-content-description pp-text-ellipsis-5">
          {review.overview}
        </p>

        <div className="pp-content-chips">
          {review.genres.map((genre, i) => (
            <Chip text={genre} key={i} fontSize={isMedium ? 10 : 8} />
          ))}
        </div>

        <p className="pp-content-year">
          {(review.release_date || review.first_air_date || "").split("-")[0]}
        </p>
      </div>
    </div>
  );
};

export default Content;
