// ** Styles **
import "./ppReviewSkeleton.scss";

// ** Types **
interface Props {
  amount?: number;
}

const PPReviewSkeleton = ({ amount = 1 }: Props) => {
  return (
    <>
      {[...Array(amount)].map((x) => (
        <div key={x} className="pp-review-skeleton">
          <div className="pp-review-skeleton-img" />

          <div className="pp-review-skeleton-container">
            <div>
              <div className="pp-review-skeleton-title" />
              <div className="pp-review-skeleton-desc" />
            </div>

            <div className="pp-review-skeleton-bottom">
              <div className="pp-review-skeleton-genres" />
              <div className="pp-review-skeleton-score" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PPReviewSkeleton;
