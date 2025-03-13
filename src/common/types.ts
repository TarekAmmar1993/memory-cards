export interface ICard {
  id: number;
  questionPreview: string;
  question: string;
  answer: string;
  color: string;
}

export interface IModal {
  children: any;
  showModal: boolean;
  setShowModal: any;
}

export interface IZoomedCard {
  id: number;
  color: string;
  setShowModal: any;
  question: string;
  handleClick: (e: React.FormEvent<HTMLFormElement>) => void;
  answer: string;
}
