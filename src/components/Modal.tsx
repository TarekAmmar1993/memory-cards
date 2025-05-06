import React, { useEffect, useRef } from "react";
import { IModal } from "../common/types";

const Modal = ({ children, showModal, setShowModal }: IModal) => {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    // Cleanup when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [showModal]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    showModal && (
      <div
        className="sticky top-0 bottom-0 left-0 h-screen w-screen bg-black/80"
        ref={modalRef}
        onClick={closeModal}
      >
        <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4">
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
