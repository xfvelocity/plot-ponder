import { useAppStore } from "@/stores/app";

// ** Components **
import PPSnackbar from "@/components/basic/snackbar/PPSnackbar";
import AuthModal from "@/components/auth/AuthModal";

// ** Types **
interface Props {
  children: React.ReactNode;
}

const ContentWrapper = (props: Props) => {
  // ** Store Hooks **
  const { showAuthModal, setShowAuthModal } = useAppStore();
  const { snackbar, setSnackbar } = useAppStore();

  // ** Functions **
  const closeSnackbar = (): void => {
    setSnackbar({
      ...snackbar,
      isOpen: false,
    });
  };

  return (
    <>
      <div className="pp-h-100">{props.children}</div>

      <AuthModal isOpen={showAuthModal} setIsOpen={setShowAuthModal} />

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
