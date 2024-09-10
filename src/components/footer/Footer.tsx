import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@/composables/mediaQueries";
import { useUserStore } from "@/stores/user";
import { useAppStore } from "@/stores/app";

// ** Styles **
import "./footer.scss";

// ** Componets **
import PPIcon from "@/components/basic/icon/PPIcon";
import PPAvatar from "@/components/basic/avatar/PPAvatar";

// ** Types **
interface Button {
  name: string;
  svg?: string;
  png?: string;
  link?: string;
  action?: () => void;
}

const Footer = () => {
  // ** Hooks **
  const navigate = useNavigate();

  const { isMedium } = useMediaQuery();
  const { setShowAuthModal } = useAppStore();
  const { user } = useUserStore();

  // ** Methods **
  const leaveReview = (): void => {
    if (user.uuid) {
      navigate(`/review/type`);
    } else {
      setShowAuthModal(true);
    }
  };

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
          isMedium,
        )}

        <button className="footer-button-review pp-hover" onClick={leaveReview}>
          <PPIcon src="review" colour="white" />
        </button>

        {FooterButton(
          user.uuid
            ? {
                name: "Profile",
                png: "/images/profile-pic.png",
                link: "/profile",
              }
            : {
                name: "Log in",
                png: "",
                action: () => setShowAuthModal(true),
              },
          isMedium,
        )}
      </div>
    </>
  );
};

const FooterButton = (button: Button, isMedium: boolean) => {
  const navigate = useNavigate();

  const { user } = useUserStore();

  // ** Methods **
  const handleButtonClick = (): void => {
    if (button.action) {
      button.action();
    } else if (button.link) {
      navigate(button.link);
    }
  };

  return (
    <button
      className={`footer-button pp-text-colour-primary pp-bg-white pp-hover`}
      onClick={handleButtonClick}
    >
      {button.svg ? (
        <PPIcon src={button.svg} size={isMedium ? 28 : 24} />
      ) : user.uuid ? (
        <PPAvatar size={isMedium ? 28 : 24} image={button.png} />
      ) : (
        <PPIcon src="user" colour="primary" size={isMedium ? 28 : 24} />
      )}
      <p>{button.name}</p>
    </button>
  );
};

export default Footer;
