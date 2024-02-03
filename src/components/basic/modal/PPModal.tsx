import { useRef } from "react";

// ** Styles **
import "./ppModal.scss";

// ** Composables
import { clickOutside } from "@/composables/generic";

// ** Components **
import PPIcon from "@/components/basic/icon/PPIcon";

// ** Types **
interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  children?: React.ReactNode;
  minSize?: number;
  persistent?: boolean;
}

const PPModal = ({
  isOpen,
  setIsOpen,
  minSize = 250,
  persistent,
  children,
}: Props) => {
  // ** Data **
  const content = useRef<HTMLDivElement | null>(null);

  // ** Methods **
  if (!persistent) {
    document.addEventListener("click", (e: MouseEvent) => {
      clickOutside(e, content.current, () => setIsOpen(false));
    });
  }

  return (
    <>
      {isOpen ? (
        <div className="pp-modal-container">
          <div
            ref={content}
            className="pp-modal-content"
            style={{ minWidth: `${minSize}px`, minHeight: `${minSize}px` }}
          >
            {persistent ? null : (
              <button onClick={() => setIsOpen(false)}>
                <PPIcon src="close" size={12} />
              </button>
            )}

            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PPModal;
