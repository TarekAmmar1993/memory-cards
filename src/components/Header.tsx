import { useState } from "react";
import Modal from "./Modal";
import { SquarePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddCardForm } from "./AddCardForm";
import { AddCategoryForm } from "./AddCategoryForm";
import { createPortal } from "react-dom";
import { AddQuestionWithAI } from "./AddQuestionWithAI";

const Header = () => {
  const [showCardForm, setShowCardForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [showAIForm, setShowAIFormm] = useState(false);
  const [AIButtonIsHovered, setAIButtonIsHovered] = useState(false);

  const handleAddButton = () => {
    setShowCardForm(true);
  };
  const handleClick = () => {
    setShowCategoryForm(true);
  };
  const handleAIButton = () => {
    setShowAIFormm(true);
  };
  return (
    <div className="flex items-center justify-between bg-linear-to-r/hsl from-[#2362B0] to-[#43A3DB] p-3">
      <h1 className="font-bold text-amber-400"> Memory Cards </h1>
      <div className="ml-auto flex gap-2">
        <Button
          onClick={handleAIButton}
          className="focus:ring-opacity-50 relative transform cursor-pointer overflow-hidden rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 px-8 py-4 font-bold text-gray-900 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-amber-400 focus:outline-none"
          onMouseEnter={() => setAIButtonIsHovered(true)}
          onMouseLeave={() => setAIButtonIsHovered(false)}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span>Generate question with AI</span>
            <svg
              className={`h-5 w-5 transition-transform duration-300 ${AIButtonIsHovered ? "translate-x-1" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>

          {/* Animated highlight effect */}
          <span
            className={`absolute inset-0 h-full w-full transform bg-white opacity-20 transition-transform duration-500 ${
              AIButtonIsHovered
                ? "translate-x-0 skew-x-0"
                : "-translate-x-full skew-x-12"
            }`}
          />
        </Button>
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

      {showCardForm &&
        createPortal(
          <Modal showModal={showCardForm} setShowModal={setShowCardForm}>
            <AddCardForm setShowModal={setShowCardForm} />
          </Modal>,
          document.body,
        )}
      {showCategoryForm &&
        createPortal(
          <Modal
            showModal={showCategoryForm}
            setShowModal={setShowCategoryForm}
          >
            <AddCategoryForm setShowModal={setShowCategoryForm} />
          </Modal>,
          document.body,
        )}
      {showAIForm &&
        createPortal(
          <Modal showModal={showAIForm} setShowModal={setShowAIFormm}>
            <AddQuestionWithAI setShowModal={setShowAIFormm} />
          </Modal>,
          document.body,
        )}
    </div>
  );
};
export default Header;
