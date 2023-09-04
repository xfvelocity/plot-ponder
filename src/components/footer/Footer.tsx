import "./footer.scss";
import { ReactSVG } from "react-svg";

interface Props {
  image: any;
  name: string;
  link: any;
  backgroundColour?: string;
  textColour?: string;
}

const Button = ({
  image,
  name,
  link,
  backgroundColour = "white",
  textColour,
}: Props) => {
  return (
    <button
      className={`footer-button pp-text-colour-${textColour} pp-bg-${backgroundColour}`}
      onClick={link}
    >
      {image}
      {name}
    </button>
  );
};

const Footer = () => {
  return (
    <div className="footer-container">
      <Button
        image={<ReactSVG src="src/components/footer/svg/home.svg" />}
        name={"Home"}
        link={"Will add later"}
      />
      <Button
        image={<ReactSVG src="src/components/footer/svg/review.svg" />}
        name={"Review"}
        link={"Will add later"}
      />
      <Button
        image={<ReactSVG src="src/components/footer/svg/profile-pic.svg" />}
        name={"Profile"}
        link={"Will add later"}
      />
    </div>
  );
};

export default Footer;
