export interface ICard {
  questionPreview: string;
  question: string;
  answer: string;
}

export interface IModal {
  children: any;
  showModal: boolean;
  setShowModal: any;
}

export interface IZoomedCard {
  questionPreview: string;
  setShowModal: any;
  question: string;
  answer: string;
}
