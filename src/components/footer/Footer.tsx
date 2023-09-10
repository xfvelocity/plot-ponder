import "./footer.scss";
import { ReactSVG } from "react-svg";

interface Button {
  name: string;
  image: string;
  link: string;
}

const buttons: Button[] = [
  {
    name: "Home",
    image: "svg/home.svg",
    link: "will add later",
  },
  {
    name: "Review",
    image: "svg/review.svg",
    link: "will add later",
  },
  {
    name: "Profile",
    image: "src",
    link: "will add later",
  },
];

const Footer = () => {
  return buttons.map((button) => {
    return (
      <button className={`footer-button pp-text-colour-primary pp-bg-white`}>
        {button.image}
        <p>{button.name}</p>
      </button>
    );
  });
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
