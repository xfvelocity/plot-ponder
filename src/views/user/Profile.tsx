import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/api";

// ** Styles **
import "./profile.scss";

// ** Components **
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PPReview from "@/components/review/PPReview";
import PPAvatar from "@/components/basic/avatar/PPAvatar";

const Profile = () => {
  const params = useParams();

  const [user, setUser] = useState<any>();
  const [reviews, setReviews] = useState<any>([]);

  const getUsersProfile = async (): Promise<void> => {
    const res = params.username
      ? await api("GET", `/user/${params.username}`)
      : await api("GET", `/user`);

    if (!res.error) {
      setUser(res);
    }
  };

  const getUsersReview = async (): Promise<void> => {
    const res = params.username
      ? await api("GET", `/user-reviews/${user.uuid}`)
      : await api("GET", `/user-reviews`);

    if (!res.error) {
      setReviews(res);
    }
  };

  const getUserContent = async (): Promise<void> => {
    await getUsersProfile();
    await getUsersReview();
  };

  useEffect(() => {
    getUserContent();
  }, []);

  return (
    <>
      <Navbar />

      {user && (
        <div className="pp-profile">
          <PPAvatar size={60} />

          <h3>{user.name}</h3>
          <p className="pp-text-colour-primary">
            <span className="pp-profile-at">@</span>
            {user.username}
          </p>
        </div>
      )}

      {reviews.length &&
        reviews.map((review, i) => <PPReview key={i} review={review} />)}

      <Footer />
    </>
  );
};

export default Profile;
