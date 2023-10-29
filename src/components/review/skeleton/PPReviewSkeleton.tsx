// ** Styles **
import "./ppReviewSkeleton.scss";

// ** Types **
interface Props {
  amount?: number;
  showUser?: boolean;
}

const PPReviewSkeleton = ({ amount = 1, showUser }: Props) => {
  return (
    <>
      {[...Array(amount)].map((_x, i) => (
        <div key={i} className="pp-review-skeleton">
          {showUser ? (
            <div className="pp-review-skeleton-user">
              <div className="pp-review-skeleton-user-container">
                <div className="pp-review-skeleton-user-img" />
                <div className="pp-review-skeleton-user-name" />
              </div>

              <div className="pp-review-skeleton-user-info" />
            </div>
          ) : null}

          <div className="pp-review-skeleton-inner">
            <div className="pp-review-skeleton-img" />

            <div className="pp-review-skeleton-container">
              <div>
                <div className="pp-review-skeleton-title" />
                <div className="pp-review-skeleton-desc" />
              </div>

              <div className="pp-review-skeleton-bottom">
                {showUser ? (
                  <div />
                ) : (
                  <div className="pp-review-skeleton-genres" />
                )}

                <div className="pp-review-skeleton-score" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PPReviewSkeleton;
