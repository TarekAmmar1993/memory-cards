import { useState } from "react";
import Modal from "./Modal";
import { SquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddCardForm } from "./AddCardForm";
import { AddCategoryForm } from "./AddCategoryForm";

const Header = () => {
  const [showCardForm, setShowCardForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);

  const handleAddButton = () => {
    setShowCardForm(true);
  };
  const handleClick = () => {
    setShowCategoryForm(true);
  };
  return (
    <div className="flex items-center justify-between bg-linear-to-r/hsl from-[#2362B0] to-[#43A3DB] p-3">
      <h1 className="font-bold text-amber-400"> Memory Cards </h1>
      <div className="ml-auto flex gap-2">
        <Button
          onClick={handleClick}
          className="ml-auto cursor-pointer bg-amber-400 hover:bg-amber-300"
        >
          <SquarePlus /> Add Category
        </Button>
        <Button
          onClick={handleAddButton}
          className="cursor-pointer bg-amber-400 hover:bg-amber-300"
        >
          <SquarePlus /> Add Card
        </Button>
      </div>

      <Modal showModal={showCardForm} setShowModal={setShowCardForm}>
        <AddCardForm setShowModal={setShowCardForm} />
      </Modal>
      <Modal showModal={showCategoryForm} setShowModal={setShowCategoryForm}>
        <AddCategoryForm setShowModal={setShowCategoryForm} />
      </Modal>
    </div>
  );
};
export default Header;
