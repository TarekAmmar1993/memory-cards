export interface ICard {
  id: string;
  questionPreview: string;
  question: string;
  answer: string;
  category: string;
}

export interface IModal {
  children: any;
  showModal: boolean;
  setShowModal: any;
}

export interface IZoomedCard {
  id: string;
  setShowModal: any;
  question: string;
  answer: string;
}
