import { useReviewStore } from "@/stores/review";
import { useNavigate } from "react-router-dom";

// ** Styles **
import "./reviewType.scss";

// ** Components **
import PPIcon from "@/components/basic/icon/PPIcon";
import Navbar from "@/components/navbar/Navbar";

const ReviewType = () => {
  const navigate = useNavigate();

  // ** Data **
  const { review } = useReviewStore();

  // ** Methods **
  const selectReviewType = (type: string): void => {
    review.type = type;

    navigate(`/review/${type}`);
  };
  return (
    <>
      <Navbar title="What would you like to review?" showBackBtn />

      <div className="review-type pp-max-width">
        <div
          className="review-type-item"
          onClick={() => selectReviewType("film")}
        >
          <PPIcon className="pp-mx-auto" src="film" size={35} />
          <p>Film</p>
        </div>

        <div
          className="review-type-item"
          onClick={() => selectReviewType("series")}
        >
          <PPIcon className="pp-mx-auto" src="series" size={35} />
          <p>Series</p>
        </div>
      </div>
    </>
  );
};

export default ReviewType;
