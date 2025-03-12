import { ArrowClockwise, Trash, X } from 'react-bootstrap-icons';
import { useState } from 'react';
import firebase from '../Firebase/firebase';

function ZoomedCard({
  id,
  color,
  setShowModal,
  question,
  handleClick,
  answer,
}) {
  // State
  const [flipped, setFlipped] = useState(false);

  function handleFlip() {
    setFlipped(!flipped);
  }

  function handleExit(e) {
    e.stopPropagation();
    setShowModal(false);
  }

  function handleDelete(e) {
    firebase.firestore().collection('Cards').doc(id).delete();

    handleExit(e);
  }

  return (
    <div
      className="zoomedCard"
      onClick={handleClick}
      style={{ background: color }}
    >
      <div className={flipped ? 'flipped' : ''}>
        <div className="front">
          <div className="responseTitle">
            <p className="title"> Answer </p>
          </div>
          <div className="response"> {answer}</div>
          <div className="exitButton" onClick={handleExit}>
            <X size="40px" />
          </div>
          <div className="flipButton" onClick={handleFlip}>
            <ArrowClockwise size="30px" />
          </div>
        </div>

        <div className="back">
          <div className="questionTitle">
            <p className="title"> Question </p>
          </div>
          <div className="question"> {question} </div>
          <div className="exitButton" onClick={handleExit}>
            <X size="40px" />
          </div>
          <div className="flipButton" onClick={handleFlip}>
            <ArrowClockwise size="30px" />
          </div>
          <div className="deleteButton" onClick={handleDelete}>
            <Trash size="30px" color="red" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ZoomedCard;
