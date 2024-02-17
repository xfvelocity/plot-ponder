// ** Styles **
import "./styles/searchUserSkeleton.scss";

const SearchUserSkeleton = () => {
  return (
    <div className="pp-search-user-skeleton">
      <div className="pp-search-user-skeleton-avatar" />

      <div className="pp-search-user-skeleton-details">
        <div className="pp-search-user-skeleton-name" />
        <div className="pp-search-user-skeleton-username" />
      </div>
    </div>
  );
};

export default SearchUserSkeleton;
