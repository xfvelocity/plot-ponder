import PPIcon from "../basic/icon/PPIcon";
import "./footer.scss";

interface Button {
  name: string;
  svg?: string;
  png?: string;
  link: string;
}

const buttons: Button[] = [
  {
    name: "Home",
    svg: "home",
    link: "will add later",
  },
  {
    name: "Review",
    svg: "review",
    link: "will add later",
  },
  {
    name: "Profile",
    png: "images/profile-pic.png",
    link: "will add later",
  },
];

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

// const Footer = (buttons) => {
//   buttons.forEach(element => {
//     return (
//       <button
//       className={`footer-button pp-text-colour-${textColour} pp-bg-${backgroundColour}`}
//       onClick={element.link}
//     >
//       <img {element.image} alt="" />
//       <p></p>
//     </button>
//     );
//   });

// };

export default Footer;
