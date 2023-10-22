// ** Styles **
import "./ppAvatar.scss";

// ** Types **
interface Props {
  size?: number;
}

const PPAvatar = ({ size = 25 }: Props) => {
  return (
    <img
      className="pp-avatar"
      width={size}
      height={size}
      src="/images/profile-pic.png"
    />
  );
};

export default PPAvatar;
