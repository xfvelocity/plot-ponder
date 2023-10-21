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
    name: "Review",
    svg: "review",
    link: "/review/film",
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
        {buttons.map((button, i) => (
          <button
            className={`footer-button pp-text-colour-primary pp-bg-white`}
            key={i}
            onClick={() => navigate(button.link)}
          >
            {button.svg ? <PPIcon src={button.svg} size={20} /> : <PPAvatar />}
            <p>{button.name}</p>
          </button>
        ))}
      </div>
    </>
  );
};

export default Footer;
