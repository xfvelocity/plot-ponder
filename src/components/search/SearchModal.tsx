import { useEffect, useRef, useState } from "react";
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
  const input = useRef<HTMLInputElement>(null);
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

  useEffect(() => {
    if (isOpen) {
      input.current?.focus();
    }
  }, [isOpen]);

  return (
    <PPModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      closeIcon={false}
      minSize={350}
    >
      <div style={{ padding: "15px" }}>
        <PPTextInput
          ref={input}
          value={search}
          setValue={(value: string) => {
            setSearch(value);
            userSearch(value);
          }}
          icon="search"
          label="Search for a user"
          iconSize={14}
        />

        <div>
          {loading
            ? [...Array(5)].map((_x, i) => <SearchUserSkeleton key={i} />)
            : results.map((user) => (
                <SearchUser user={user} key={user.username} />
              ))}
        </div>
      </div>
    </PPModal>
  );
};

export default SearchModal;
