// *Styles*
import "./ppFilm.scss";

import Chip from "../chip/chip";

interface Props {
  textColour?: string;
}

const fakeData = {
  title: "The Avengers",
  poster: "icons/poster.jpeg",
  description:
    "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their mindas together to accomplish the task.",
  releaseYear: "2012",
  genres: ["Action", "Superhero"],
};

const PPFilm = ({ textColour = "primary" }: Props) => {
  return (
    <div className="pp-film-container">
      <img
        src={fakeData.poster}
        alt="movie poster"
        className="pp-film-poster"
      />
      <div className="pp-film-info">
        <p className="pp-film-title">{fakeData.title}</p>
        <p className="pp-film-description">{fakeData.description}</p>
        <div className="pp-film-chip-container">
          {fakeData.genres.map((genre) => (
            <Chip text={genre} />
          ))}
          <p className={`pp-film-year pp-text-colour-${textColour}`}>
            {fakeData.releaseYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PPFilm;
