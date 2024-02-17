import { Content } from "@/types/review.types";
import { useMediaQuery } from "@/composables/mediaQueries";

// *Styles*
import "./contentSummary.scss";

// ** Components **
import Chip from "@/components/basic/chip/PPChip";

// ** Types **
interface Props {
  content: Content;
}

const ContentSummary = ({ content }: Props) => {
  const { isMedium } = useMediaQuery();

  return (
    <div className="pp-content-container">
      <img src={content.image} className="pp-content-poster" />

      <div className="pp-content-info">
        <p className="pp-content-title pp-text-ellipsis">{content.name}</p>
        <p className="pp-content-description pp-text-ellipsis-5">
          {content.overview}
        </p>

        <div className="pp-content-chips">
          {content.genres.map((genre, i) => (
            <Chip text={genre} key={i} fontSize={isMedium ? 10 : 8} />
          ))}
        </div>

        <p className="pp-content-year">
          {(content.release_date || content.first_air_date || "").split("-")[0]}
        </p>
      </div>
    </div>
  );
};

export default ContentSummary;
