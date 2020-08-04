import React from 'react';

const Modal = (props) => {
  if (!props.isOpen) {
    return null;
  }

  const handleOverlayClick = () => {
    props.closeModal();
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div onClick={handleOverlayClick} className="modal-overlay">
      <div onClick={handleModalClick} className="modal-wrapper">
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
