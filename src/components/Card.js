import {useState} from "react";
import Modal from "./Modal";
import ZoomedCard from "./ZoomedCard";

function Card({id,questionPreview,question, answer,color}) {

    // State
    const [showModal, setShowModal] = useState(false);


    function handleClick() {
        setShowModal(true);
    }

    return (
        <div className="block-col" onClick={handleClick} style={{background:color}}>

            <h4 className="questionTitle"> Question </h4>
            <div className="question"> {questionPreview}</div>

            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ZoomedCard id={id} color={color}  setShowModal={setShowModal} question={question} handleClick={handleClick} answer={answer}/>
            </Modal>
        </div>
    )
}

export default Card