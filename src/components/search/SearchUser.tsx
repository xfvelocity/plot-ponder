import { useNavigate } from "react-router";

// ** Types **
import { SimpleUser } from "@/types/user.types";

// ** Styles **
import "./styles/searchUser.scss";

// ** Components **
import PPAvatar from "@/components/basic/avatar/PPAvatar";

// ** Types **
interface Props {
  user: SimpleUser;
}

const SearchUser = ({ user }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="pp-search-user pp-hover"
      onClick={() => navigate(`/user/${user.username}`)}
    >
      <PPAvatar />

      <div className="pp-search-user-details">
        <h4>{user.name}</h4>
        <p>
          <span>@</span>
          {user.username}
        </p>
      </div>
    </div>
  );
};

export default SearchUser;
