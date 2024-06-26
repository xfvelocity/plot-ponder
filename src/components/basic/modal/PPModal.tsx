import { useEffect, useRef } from "react";
import clsx from "clsx";

// ** Composables
import { clickOutside } from "@/composables/generic";

// ** Styles **
import "./ppModal.scss";

// ** Components **
import PPIcon from "@/components/basic/icon/PPIcon";

// ** Types **
interface Props {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  children?: React.ReactNode;
  minSize?: number;
  persistent?: boolean;
  closeIcon?: boolean;
  backdrop?: boolean;
}

const PPModal = ({
  isOpen,
  setIsOpen,
  minSize = 250,
  persistent,
  children,
  closeIcon = true,
  backdrop = true,
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

    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div
          ref={container}
          className={clsx(`pp-modal-container`, {
            "pp-modal-backdrop": backdrop,
          })}
        >
          <div
            ref={content}
            className="pp-modal-content"
            style={{ minWidth: `${minSize}px`, minHeight: `${minSize}px` }}
          >
            {!closeIcon || persistent ? null : (
              <button
                className="pp-modal-close"
                onClick={() => setIsOpen(false)}
              >
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
