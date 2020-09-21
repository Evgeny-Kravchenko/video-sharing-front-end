export interface ModalWindowProps {
  onSetModalWindow: (isShow: boolean) => void;
}

export interface ModalWindowForm {
  title: string;
  description: string;
  file: FileList;
}
