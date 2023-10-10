// ** Styles **
import "./ppReview.scss";

// ** Components **
import PPDateChip from "../basic/date-chip/PPDateChip";
import PPIcon from "../basic/icon/PPIcon";

// ** Types **
interface Props {
  review: {
    comments: string;
    date: string;
    location: string;
    rating: number;
    userUuid: string;
    film: {
      genres: string[];
      image: string;
      name: string;
    };
  };
}

const PPReview = ({ review }: Props) => {
  return (
    <div className="pp-review">
      <div className="pp-review-container">
        <img className="pp-review-poster" src={review.film.image} />

        <div className="pp-review-info">
          <div>
            <p className="pp-review-title">{review.film.name}</p>
            <p className="pp-review-description">{review.comments}</p>
          </div>

          <div className="pp-review-bottom">
            <div className="pp-review-bottom-date">
              <PPIcon
                src={review.location === "atHome" ? "home" : "ticket"}
                size={14}
              />
              <PPDateChip date={new Date(review.date)} />
            </div>

            <p className="pp-review-rating">{review.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PPReview;
