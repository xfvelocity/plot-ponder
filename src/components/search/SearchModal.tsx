import { useState } from "react";
import { api } from "@/api";

// ** Composables **
import { debounce } from "@/composables/generic";

// ** Components **
import PPTextInput from "@/components/basic/input/text-input/PPTextInput";
import PPModal from "@/components/basic/modal/PPModal";
import SearchUser from "@/components/search/SearchUser";
import SearchUserSkeleton from "@/components/search/SearchUserSkeleton";

// ** Types **
interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const SearchModal = ({ isOpen, setIsOpen }: Props) => {
  // ** Data **
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);

  // ** Methods **
  const userSearch = debounce(async (searchTerm: string): Promise<void> => {
    if (searchTerm.length > 1) {
      setLoading(true);

      const res = await api("GET", `/search/user?q=${searchTerm}`);

      setResults(res.data);

      setLoading(false);
    }
  }, 300);

  return (
    <PPModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      closeIcon={false}
      minSize={350}
    >
      <div style={{ marginTop: "15px" }}>
        <PPTextInput
          value={search}
          setValue={(value: string) => {
            setSearch(value);
            userSearch(value);
          }}
          icon="search"
          label="Search"
          iconSize={14}
        />
      </div>

      <div>
        {loading
          ? [...Array(5)].map((_x, i) => <SearchUserSkeleton key={i} />)
          : results.map((user) => (
              <SearchUser user={user} key={user.username} />
            ))}
      </div>
    </PPModal>
  );
};

export default SearchModal;
