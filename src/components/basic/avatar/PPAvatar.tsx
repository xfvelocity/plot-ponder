// ** Styles **
import "./ppAvatar.scss";

// ** Types **
interface Props {
  size?: number;
  image?: string;
}

const PPAvatar = ({ size = 25, image = "/images/profile-pic.png" }: Props) => {
  return (
    <div
      className="pp-avatar pp-mx-auto"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {image ? (
        <img className="pp-avatar" width={size} height={size} src={image} />
      ) : (
        ""
      )}
    </div>
  );
};

export default PPAvatar;
