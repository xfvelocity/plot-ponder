import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/user";
import PPSnackbar from "../basic/snackbar/PPSnackbar";
import { useAppStore } from "@/stores/app";

// ** Types **
interface Props {
  children: React.ReactNode;
}

const ContentWrapper = (props: Props) => {
  // ** Hooks **
  const navigate = useNavigate();
  const location = useLocation();

  // ** Store Hooks **
  const { user } = useUserStore();
  const { snackbar, setSnackbar } = useAppStore();

  // ** Functions **
  const closeSnackbar = (): void => {
    setSnackbar({
      ...snackbar,
      isOpen: false,
    });
  };

  useEffect(() => {
    if (["/login", "/register"].includes(location.pathname)) {
      // If the user is on the login or register page and they are logged in,
      // redirect them to the home page.
      if (user.uuid) {
        navigate("/");
      }
    } else if (!user.uuid) {
      // If the user is not on the login or register page and they are not logged in,
      // redirect them to the login page.
      navigate("/login");
    }
  }, [location]);

  return (
    <>
      <div className="pp-h-100">{props.children}</div>

      <PPSnackbar
        text={snackbar.text}
        type={snackbar.type}
        isOpen={snackbar.isOpen}
        closeFn={closeSnackbar}
      />
    </>
  );
};

export default ContentWrapper;
