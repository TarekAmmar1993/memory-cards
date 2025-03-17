import { useState } from 'react';
import Modal from './Modal';
import QuestionForm from './QuestionForm';
import { SquarePlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
function Header() {
  const [showModal, setShowModal] = useState(false);

  function handleAddButton() {
    setShowModal(true);
  }

  return (
    <div className="bg-linear-to-r/hsl from-indigo-700 to-indigo-400 flex justify-between items-center p-3">
      <h1 className="font-bold text-amber-400"> Memory Cards </h1>
      <Button
        onClick={handleAddButton}
        className="bg-amber-400 cursor-pointer hover:bg-amber-300"
      >
        <SquarePlus /> Add Card
      </Button>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <QuestionForm setShowModal={setShowModal} />
      </Modal>
    </div>
  );
}
export default Header;
