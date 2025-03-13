import React, { useRef } from 'react';
import { IModal } from '../common/types';

function Modal({ children, showModal, setShowModal }: IModal) {
  const modalRef = useRef(null);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    showModal && (
      <div className="Modal" ref={modalRef} onClick={closeModal}>
        <div className="container">{children}</div>
      </div>
    )
  );
}

export default Modal;
