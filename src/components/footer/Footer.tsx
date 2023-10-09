import { useNavigate } from "react-router-dom";

// ** Componets **
import PPIcon from "../basic/icon/PPIcon";

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
  const navigate = useNavigate();

  return (
    <div className="footer-container">
      {buttons.map((button, i) => (
        <button
          className={`footer-button pp-text-colour-primary pp-bg-white`}
          key={i}
          onClick={() => navigate(button.link)}
        >
          {button.svg ? (
            <PPIcon src={button.svg} size={20} />
          ) : (
            <img
              src={button.png}
              className="profile-picture"
              alt="profile picture"
            />
          )}
          <p>{button.name}</p>
        </button>
      ))}
    </div>
  );
};

export default Footer;
