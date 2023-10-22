import { useNavigate } from "react-router-dom";

// ** Componets **
import PPIcon from "../basic/icon/PPIcon";
import PPAvatar from "../basic/avatar/PPAvatar";

// ** Styles **
import "./footer.scss";

interface Button {
  name: string;
  svg?: string;
  png?: string;
  link: string;
}

// ** Button Data **
const buttons: Button[] = [
  {
    name: "Home",
    svg: "home",
    link: "/",
  },
  {
    name: "Profile",
    png: "/images/profile-pic.png",
    link: "/profile",
  },
];

// ** Component **
const Footer = () => {
  // ** Hooks **
  const navigate = useNavigate();

  return (
    <>
      <div className="footer-holder" />

      <div className="footer-container pp-bg-white">
        {FooterButton(buttons[0])}

        <button
          className="footer-button-review"
          onClick={() => navigate(`/review/film`)}
        >
          <PPIcon src="review" colour="white" />
        </button>

        {FooterButton(buttons[1])}
      </div>
    </>
  );
};

const FooterButton = (button: Button) => {
  const navigate = useNavigate();

  return (
    <button
      className={`footer-button pp-text-colour-primary pp-bg-white`}
      onClick={() => navigate(button.link)}
    >
      {button.svg ? <PPIcon src={button.svg} size={24} /> : <PPAvatar />}
      <p>{button.name}</p>
    </button>
  );
};

export default Footer;
