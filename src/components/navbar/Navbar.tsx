import { useNavigate } from "react-router";
import { useMediaQuery } from "@/composables/mediaQueries";
import { useState } from "react";

// ** Styles **
import "./navbar.scss";

// ** Components **
import PPIcon from "@/components/basic/icon/PPIcon";
import SearchModal from "@/components/search/SearchModal";

// ** Types **
interface Props {
  title?: string;
  progress?: {
    total: number;
    current: number;
  };
  showBackBtn?: boolean;
  backFn?: () => void;
}

const Navbar = ({ title, progress, showBackBtn, backFn }: Props) => {
  // ** Hooks **
  const navigate = useNavigate();
  const { isMedium } = useMediaQuery();

  // ** Data **
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  // ** Methods **
  const back = (): void => {
    navigate(-1);

    if (backFn) {
      backFn();
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-content">
          {showBackBtn && (
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
                <PPIcon src="ticket" size={isMedium ? 28 : 24} />
                <h3>PlotPonder</h3>
              </>
            )}
          </div>

          <div className="navbar-custom">
            <button onClick={() => setIsSearchModalOpen(true)}>
              <PPIcon src="search" colour="primary" size={16} />
            </button>
          </div>
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

      <SearchModal
        isOpen={isSearchModalOpen}
        setIsOpen={setIsSearchModalOpen}
      />
    </>
  );
};

export default Navbar;
