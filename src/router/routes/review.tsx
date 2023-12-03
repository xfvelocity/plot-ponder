import ContentWrapper from "@/components/content-wrapper/ContentWrapper";
import ReviewReview from "@/views/review/review-review/ReviewReview";
import ReviewSelect from "@/views/review/review-select/ReviewSelect";
import ReviewType from "@/views/review/review-type/ReviewType";

export default {
  path: "/review",
  children: [
    {
      path: "type",
      element: (
        <ContentWrapper>
          <ReviewType />
        </ContentWrapper>
      ),
    },
    {
      path: ":reviewType",
      element: (
        <ContentWrapper>
          <ReviewSelect />
        </ContentWrapper>
      ),
    },
    {
      path: "review",
      element: (
        <ContentWrapper>
          <ReviewReview />
        </ContentWrapper>
      ),
    },
  ],
};
