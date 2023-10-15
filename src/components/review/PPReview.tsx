import { useNavigate } from "react-router-dom";

// ** Styles **
import "./ppReview.scss";

// ** Components **
import PPDateChip from "../basic/date-chip/PPDateChip";
import PPIcon from "../basic/icon/PPIcon";
import PPAvatar from "../basic/avatar/PPAvatar";

// ** Types **
import { Review } from "@/types/generic";

interface Props {
  review: Review;
  showUser?: boolean;
}

const PPReview = ({ review, showUser = false }: Props) => {
  // ** Hooks **
  const navigate = useNavigate();

  return (
    <div className="pp-review">
      {showUser ? (
        <div
          className="pp-review-user"
          onClick={() => navigate(`/user/${review.user.username}`)}
        >
          <div className="pp-review-user-user">
            <PPAvatar />
            <p>{review.user.name}</p>
          </div>

          <div className="pp-review-user-date">{PPReviewDate(review)}</div>
        </div>
      ) : null}

      <div className="pp-review-container">
        <img className="pp-review-poster" src={review.film.image} />

        <div className="pp-review-info">
          <div>
            <p className="pp-review-title">{review.film.name}</p>
            <p className="pp-review-description">{review.comments}</p>
          </div>

          <div className="pp-review-bottom">
            {showUser ? null : (
              <div className="pp-review-bottom-date">
                {PPReviewDate(review)}
              </div>
            )}

            <p className="pp-review-rating">{review.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PPReviewDate = (review: Review) => {
  return (
    <>
      <PPIcon
        src={review.location === "atHome" ? "home" : "ticket"}
        size={14}
      />
      <PPDateChip date={new Date(review.date)} />
    </>
  );
};

export default PPReview;
