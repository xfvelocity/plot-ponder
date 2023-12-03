import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@/composables/mediaQueries";

// ** Componets **
import PPIcon from "@/components/basic/icon/PPIcon";
import PPAvatar from "@/components/basic/avatar/PPAvatar";

// ** Styles **
import "./footer.scss";

// ** Types **
interface Button {
  name: string;
  svg?: string;
  png?: string;
  link: string;
}

const Footer = () => {
  // ** Hooks **
  const navigate = useNavigate();
  const { isMedium } = useMediaQuery();

  return (
    <>
      <div className="footer-holder" />

      <div className="footer-container pp-bg-white">
        {FooterButton(
          {
            name: "Home",
            svg: "home",
            link: "/",
          },
          isMedium
        )}

        <button
          className="footer-button-review pp-hover"
          onClick={() => navigate(`/review/type`)}
        >
          <PPIcon src="review" colour="white" />
        </button>

        {FooterButton(
          {
            name: "Profile",
            png: "/images/profile-pic.png",
            link: "/profile",
          },
          isMedium
        )}
      </div>
    </>
  );
};

const FooterButton = (button: Button, isMedium: boolean) => {
  const navigate = useNavigate();

  return (
    <button
      className={`footer-button pp-text-colour-primary pp-bg-white pp-hover`}
      onClick={() => navigate(button.link)}
    >
      {button.svg ? (
        <PPIcon src={button.svg} size={isMedium ? 28 : 24} />
      ) : (
        <PPAvatar size={isMedium ? 28 : 24} />
      )}
      <p>{button.name}</p>
    </button>
  );
};

export default Footer;
