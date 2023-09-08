import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";

// ** Styles **
import "./navbar.scss";

// ** Components **
import PPIcon from "../basic/icon/ppIcon";

// ** Types **
interface Props {
  title?: string;
  children?: React.ReactNode;
  progress?: {
    total: number;
    current: number;
  };
}

const Navbar = ({ title, children, progress }: Props) => {
  // ** Hooks **
  const navigate = useNavigate();
  const location = useLocation();

  // ** Methods **
  const back = (): void => {
    navigate(-1);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          {location.key !== "default" && (
            <button className="pp-button-reset" onClick={back}>
              <PPIcon
                className="navbar-back-btn"
                src="chevron-left"
                size={14}
              />
            </button>
          )}

          <div className="navbar-title">
            {title ? (
              <h3>{title}</h3>
            ) : (
              <>
                <PPIcon src="ticket" />
                <h3>PlotPonder</h3>
              </>
            )}
          </div>

          <div className="navbar-custom">{children}</div>
        </div>
      </div>

      {progress?.total && (
        <div className="navbar-progress-bar">
          <div
            className="navbar-progress-bar-inner"
            style={{ width: `${(100 / progress.total) * progress.current}%` }}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
