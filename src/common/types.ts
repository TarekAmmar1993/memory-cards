export interface ICard {
  id: number;
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
  id: number;
  setShowModal: any;
  question: string;
  answer: string;
}
