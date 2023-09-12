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
    png: "images/profile-pic.png",
    link: "/",
  },
];

// ** Component **
const Footer = () => {
  return (
    <div className="footer-container">
      {buttons.map((button) =>
        button.svg ? (
          <button
            className={`footer-button pp-text-colour-primary pp-bg-white`}
          >
            <PPIcon src={button.svg} size={20} />
            <p>{button.name}</p>
          </button>
        ) : (
          <button
            className={`footer-button pp-text-colour-primary pp-bg-white`}
          >
            <img
              src={button.png}
              className="profile-picture"
              alt="profile picture"
            />
            <p>{button.name}</p>
          </button>
        )
      )}
    </div>
  );
};

export default Footer;
