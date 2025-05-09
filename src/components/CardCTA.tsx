import { ArrowClockwise, Trash, X } from "react-bootstrap-icons";

const CardCTA = ({ handleExit, handleDelete, handleFlip }) => {
  return (
    <div>
      <div
        className="fixed top-4 right-4 cursor-pointer hover:text-red-600"
        onClick={handleExit}
      >
        <X size="30px" />
      </div>
      <div
        className="fixed top-4 left-4 cursor-pointer hover:animate-spin"
        onClick={handleFlip}
      >
        <ArrowClockwise size="30px" />
      </div>
      <div
        className="fixed right-4 bottom-4 cursor-pointer hover:animate-bounce"
        onClick={handleDelete}
      >
        <Trash size="30px" color="red" />
      </div>
    </div>
  );
};

export default CardCTA;
