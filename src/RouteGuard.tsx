// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useUserStore } from "./stores/user";

// ** Types **
interface Props {
  children: React.ReactNode;
}

const RouteGuard = (props: Props) => {
  // TODO: Add back in once the API has been deployed
  // // ** Hooks **
  // const navigate = useNavigate();
  // const location = useLocation();

  // // ** Store Hooks **
  // const { user } = useUserStore();

  // useEffect(() => {
  //   if (["/login", "/register"].includes(location.pathname)) {
  //     // If the user is on the login or register page and they are logged in,
  //     // redirect them to the home page.
  //     if (user.uuid) {
  //       navigate("/");
  //     }
  //   } else if (!user.uuid) {
  //     // If the user is not on the login or register page and they are not logged in,
  //     // redirect them to the login page.
  //     navigate("/login");
  //   }
  // }, [location]);

  return <>{props.children}</>;
};

export default RouteGuard;
