import { useEffect } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { TbX } from "react-icons/tb";

interface ModalType {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
  logo: string;
  width?: string;
}

const Modal: React.FC<ModalType> = ({
  open,
  children,
  onClose,
  logo,
  width = "w-[calc(100vw-2rem)] md:max-w-lg rounded-lg",
}) => {
  const modalref = useOutsideClick(onClose);
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  return (
    open && (
      <div className="fixed backdrop-blur-sm top-0 left-0 right-0 bottom-0 w-screen h-screen bg-black bg-opacity-30 modal z-50">
        <div
          ref={modalref}
          className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondery-50  p-4  transition-all duration-500 ease-out md:max-h-[calc(100vh-2rem)] bg-white
                        ${width}`}
        >
          <div className="relative flex flex-col items-center">
            <div className="flex justify-center w-full mb-4">
              <div className="font-bold">{logo}</div>
              <button onClick={onClose} className="absolute top-1 left-3">
                <TbX className="w-6 h-6" />
              </button>
            </div>
            <div className="w-full flex - justify-center">{children}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
