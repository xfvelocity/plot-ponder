import { useNavigate } from "react-router";
import { useMediaQuery } from "@/composables/mediaQueries";

// ** Styles **
import "./ppReview.scss";

// ** Components **
import PPDateChip from "@/components/basic/date-chip/PPDateChip";
import PPIcon from "@/components/basic/icon/PPIcon";
import PPAvatar from "@/components/basic/avatar/PPAvatar";

// ** Types **
import { Review } from "@/types/review.types";

interface Props {
  review: Review;
  showUser?: boolean;
  showContent?: boolean;
}

const PPReview = ({ review, showUser = false, showContent = true }: Props) => {
  // ** Hooks **
  const navigate = useNavigate();
  const { isMedium } = useMediaQuery();

  return (
    <div className="pp-review">
      {showUser ? (
        <div className="pp-review-user">
          <div
            className="pp-review-user-user pp-hover"
            onClick={() => navigate(`/user/${review.user.username}`)}
          >
            <PPAvatar size={isMedium ? 25 : 20} />
            <p>{review.user.name}</p>
          </div>

          <div className="pp-review-user-date">
            {PPReviewDate(review, isMedium)}
          </div>
        </div>
      ) : null}

      <div className="pp-review-container">
        {showContent ? (
          <img
            className="pp-hover pp-review-poster"
            src={review.content.image}
            onClick={() =>
              navigate(`/content/${review.type}/${review.contentId}`)
            }
          />
        ) : null}

        <div className="pp-review-info">
          <div>
            {showContent ? (
              <p className="pp-review-title pp-text-ellipsis">
                {review.content.name}
              </p>
            ) : null}

            <p className="pp-review-description pp-text-ellipsis-7">
              {review.comments}
            </p>
          </div>

          <div className="pp-review-bottom">
            {showUser ? null : (
              <div className="pp-review-bottom-date">
                {PPReviewDate(review, isMedium)}
              </div>
            )}

            <div className="pp-review-rating-container">
              {review.rating === 10 ? (
                <PPIcon src="star" size={isMedium ? 42 : 38} />
              ) : null}

              <p className="pp-review-rating">{review.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PPReviewDate = (review: Review, isMedium: boolean) => {
  return (
    <>
      <PPIcon
        src={
          review.type === "film"
            ? review.location === "atHome"
              ? "home"
              : "ticket"
            : "series"
        }
        size={isMedium ? 16 : 14}
      />

      <PPDateChip date={new Date(review.date)} fontSize={isMedium ? 11 : 9} />
    </>
  );
};

export default PPReview;
