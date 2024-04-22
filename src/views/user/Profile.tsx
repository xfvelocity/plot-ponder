import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { api } from "@/api";
import { useUserStore } from "@/stores/user";

// ** Types **
import { ProfileUser } from "@/types/generic.types";
import { Review } from "@/types/review.types";

// ** Styles **
import "./profile.scss";

// ** Components **
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PPReview from "@/components/review/review/PPReview";
import PPAvatar from "@/components/basic/avatar/PPAvatar";
import PPReviewSkeleton from "@/components/review/skeleton/PPReviewSkeleton";

const Profile = () => {
  const params = useParams();
  const { user } = useUserStore();

  const loader = useRef(null);

  const [profileUser, setProfileUser] = useState<ProfileUser>({
    name: "",
    username: "",
    uuid: "",
    avatar: "",
  });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [scrollDisabled, setScrollDisabled] = useState<boolean>(false);

  // ** Methods **
  const getUsersProfile = async (): Promise<void> => {
    setLoading(true);

    const res = params.username
      ? await api("GET", `/user/${params.username}`)
      : await api("GET", `/user`);

    if (!res.error) {
      setProfileUser(res);
    }

    setLoading(false);
  };

  const getUsersReview = async (): Promise<void> => {
    const res = params.username
      ? await api("GET", `/user-reviews/${profileUser.uuid}?page=${page}`)
      : await api("GET", `/user-reviews?page=${page}`);

    if (!res.error) {
      setReviews([...reviews, ...res.data]);
    }

    if (page === res.meta.totalPages || res.data.length === 0) {
      setScrollDisabled(true);
    } else {
      setPage(page + 1);
    }
  };

  // ** UseEffect **
  useEffect(() => {
    if (params.username) {
      getUsersProfile();
    } else {
      setProfileUser({
        name: user.name,
        username: user.username,
        uuid: user.uuid,
        avatar: user.avatar,
      });
    }
  }, []);

  useEffect(() => {
    if (profileUser.uuid) {
      getUsersReview();
    }
  }, [profileUser]);

  useEffect(() => {
    if (page > 1) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            getUsersReview();
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        },
      );

      if (loader.current) {
        observer.observe(loader.current);
      }

      return () => {
        if (loader.current) {
          observer.unobserve(loader.current);
        }
      };
    }
  }, [reviews]);

  return (
    <>
      <Navbar />

      <div className="pp-profile pp-max-width">
        <div className="pp-profile-user">
          {loading ? (
            <div className="pp-profile-user-skeleton">
              <div className="pp-profile-user-skeleton-img" />

              <div>
                <div className="pp-profile-user-skeleton-name" />
                <div className="pp-profile-user-skeleton-username" />
              </div>
            </div>
          ) : (
            <div>
              <PPAvatar className="pp-mx-auto" size={60} />

              <h3>{profileUser.name}</h3>
              <p className="pp-text-colour-primary">
                <span className="pp-profile-user-at">@</span>
                {profileUser.username}
              </p>
            </div>
          )}
        </div>

        {reviews.map((review, i) => (
          <PPReview key={i} review={review} />
        ))}

        {scrollDisabled ? null : (
          <div ref={loader} style={{ marginTop: "20px" }}>
            <PPReviewSkeleton amount={reviews.length === 0 ? 3 : 1} />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Profile;
