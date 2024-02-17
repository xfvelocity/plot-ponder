import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// ** Types **
import type { Content } from "@/types/review.types";

// ** Components **
import ContentSummary from "@/components/content-summary/ContentSummary";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import PPButton from "@/components/basic/button/PPButton";

const Content = () => {
  const params = useParams();

  // ** Data **
  const [content, setContent] = useState<Content>();

  // ** Methods **
  const getContent = async (): Promise<void> => {
    const type = params.type === "film" ? "movie" : "tv";
    const res = await axios.get(
      `https://api.themoviedb.org/3/${type}/${params.id}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
        },
      }
    );

    const { title, id, genres, release_date, overview, poster_path } = res.data;

    setContent({
      name: title,
      id,
      genres: genres.map((x: any) => x.name),
      release_date,
      overview,
      image: `https://image.tmdb.org/t/p/original${poster_path}`,
    });
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <>
      <Navbar />

      {content ? (
        <div>
          <ContentSummary content={content} />

          <PPButton className="pp-mx-auto" text="Review" />
        </div>
      ) : null}

      <Footer />
    </>
  );
};

export default Content;
