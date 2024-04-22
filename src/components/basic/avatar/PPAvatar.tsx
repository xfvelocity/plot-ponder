// ** Styles **
import "./ppAvatar.scss";

// ** Types **
interface Props {
  className?: string;
  size?: number;
  image?: string;
}

const PPAvatar = ({
  className,
  size = 25,
  image = "/images/profile-pic.png",
}: Props) => {
  return (
    <div
      className={`pp-avatar ${className}`}
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
