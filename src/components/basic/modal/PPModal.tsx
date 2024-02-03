import { useEffect, useRef } from "react";

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
  const container = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);

  // ** Effect **
  useEffect(() => {
    container.current?.addEventListener("click", (e: MouseEvent) => {
      if (!persistent) {
        clickOutside(e, content.current, () => setIsOpen(false));
      }
    });
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div ref={container} className="pp-modal-container">
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
