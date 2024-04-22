import { useState } from "react";

// ** Components **
import PPModal from "@/components/basic/modal/PPModal";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

// ** Types **
interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  backdrop?: boolean;
}

const AuthModal = ({ isOpen, setIsOpen, backdrop }: Props) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <PPModal
      isOpen={isOpen}
      backdrop={backdrop}
      minSize={310}
      setIsOpen={setIsOpen}
    >
      {isLogin ? (
        <Login setIsOpen={setIsOpen} setIsLogin={setIsLogin} />
      ) : (
        <Register setIsOpen={setIsOpen} setIsLogin={setIsLogin} />
      )}
    </PPModal>
  );
};

export default AuthModal;
