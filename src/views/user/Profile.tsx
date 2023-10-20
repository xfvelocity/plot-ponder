import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { api } from "@/api";

// ** Styles **
import "./profile.scss";

// ** Components **
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PPReview from "@/components/review/PPReview";
import PPAvatar from "@/components/basic/avatar/PPAvatar";
import PPLoading from "@/components/basic/loading/PPLoading";

// ** Types **
import { ProfileUser, Review } from "@/types/generic";

const Profile = () => {
  const params = useParams();

  const loader = useRef(null);

  const [user, setUser] = useState<ProfileUser>({
    name: "",
    username: "",
    uuid: "",
    avatar: "",
  });
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [scrollDisabled, setScrollDisabled] = useState<boolean>(false);

  const getUsersProfile = async (): Promise<void> => {
    setLoading(true);

    const res = params.username
      ? await api("GET", `/user/${params.username}`)
      : await api("GET", `/user`);

    if (!res.error) {
      setUser(res);
    }

    setLoading(false);
  };

  const getUsersReview = async (): Promise<void> => {
    const res = params.username
      ? await api("GET", `/user-reviews/${user.uuid}?page=${page}`)
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

  useEffect(() => {
    getUsersProfile();
  }, []);

  useEffect(() => {
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
      }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [reviews]);

  return (
    <>
      <Navbar />

      <div className="pp-profile">
        <div className="pp-profile-user">
          {loading ? (
            <PPLoading className="pp-mx-auto" size={24} />
          ) : (
            <div>
              <PPAvatar size={60} />

              <h3>{user.name}</h3>
              <p className="pp-text-colour-primary">
                <span className="pp-profile-user-at">@</span>
                {user.username}
              </p>
            </div>
          )}
        </div>

        {reviews.map((review, i) => (
          <PPReview key={i} review={review} />
        ))}

        {scrollDisabled ? null : (
          <div ref={loader} style={{ marginTop: "20px" }}>
            <PPLoading className="pp-mx-auto" size={24} />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Profile;
