import { useState } from "react";

// ** Components **
import PPTextInput from "@/components/basic/input/text-input/PPTextInput";
import PPModal from "@/components/basic/modal/PPModal";

// ** Types **
interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
}

const PPSearchModal = ({ isOpen, setIsOpen }: Props) => {
  // ** Data **
  const [search, setSearch] = useState<string>("");

  return (
    <PPModal isOpen={isOpen} setIsOpen={setIsOpen} minSize={350}>
      <div>
        <PPTextInput
          value={search}
          setValue={setSearch}
          icon="search"
          label="Search"
          iconSize={14}
        />
      </div>
    </PPModal>
  );
};

export default PPSearchModal;
