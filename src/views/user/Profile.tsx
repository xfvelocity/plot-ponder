import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/api";

// ** Components **
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const Profile = () => {
  const params = useParams();

  const [user, setUser] = useState<any>();

  const getUsersProfile = async (): Promise<void> => {
    const res = params.username
      ? await api("GET", `/user/${params.username}`)
      : await api("GET", `/user`);

    if (!res.error) {
      setUser(res);
    }
  };

  useEffect(() => {
    getUsersProfile();
  }, []);

  return (
    <>
      <Navbar />

      {user && (
        <div>
          <h3>{user.name}</h3>
          <p>@{user.username}</p>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Profile;
