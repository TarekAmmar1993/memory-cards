import React from 'react';
import { ArrowClockwise, Trash, X } from 'react-bootstrap-icons';

const CardCTA = ({ handleExit, handleDelete, handleFlip }) => {
  return (
    <div>
      <div className="fixed top-4 right-4 cursor-pointer" onClick={handleExit}>
        <X size="30px" />
      </div>
      <div className="fixed top-4 left-4 cursor-pointer" onClick={handleFlip}>
        <ArrowClockwise size="30px" />
      </div>
      <div
        className="fixed bottom-4 right-4 cursor-pointer hover:animate-bounce "
        onClick={handleDelete}
      >
        <Trash size="30px" color="red" />
      </div>
    </div>
  );
};

export default CardCTA;
