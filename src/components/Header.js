import {useState} from "react";
import Modal from "./Modal";
import QuestionForm from "./QuestionForm";

function Header(){
    const [showModal,setShowModal]= useState(false);


    function handleAddButton(){
        setShowModal(true)
    }

    return(

        <div className="header" style={{float:'left'}} >
              <span>
                  <button className='add-btn'  onClick={handleAddButton}>
                      <span className="text"> Add Card +</span>
                  </button>
              </span>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <QuestionForm setShowModal={setShowModal}/>
            </Modal>

            <span style={{marginLeft:'35vw'}}> Memory Cards </span>
        </div>
    )
}
export default Header