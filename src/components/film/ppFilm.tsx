// *Styles*
import "./ppFilm.scss";

import Chip from "../basic/chip/chip";

const fakeData = {
  title: "The Avengers",
  poster: "images/poster.jpeg",
  description:
    "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their mindas together to accomplish the task.",
  releaseYear: "2012",
  genres: ["Action", "Superhero"],
};

const PPFilm = () => {
  return (
    <div className="pp-film-container">
      <img src={fakeData.poster} className="pp-film-poster" />
      <div className="pp-film-info">
        <p className="pp-film-title">{fakeData.title}</p>
        <p className="pp-film-description">{fakeData.description}</p>
        <div className="pp-film-chip-container">
          {fakeData.genres.map((genre, i) => (
            <Chip text={genre} key={i} />
          ))}
          <p className="pp-film-year">{fakeData.releaseYear}</p>
        </div>
      </div>
    </div>
  );
};

export default PPFilm;
