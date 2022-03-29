import { FC, createContext, useState } from "react";

export type ModalContextType = {
  modal: boolean;
  setModal: (value: boolean) => void;
  window:string
  setWindow:(value:string)=> void
};

export const ModalContext = createContext<ModalContextType | null>(null);


export const ContentProvider: FC = ({ children }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [window,setWindow] = useState<string>("")

  return (
    <ModalContext.Provider value={{ modal, setModal,window,setWindow }}>
      {children}
    </ModalContext.Provider>
  );
};
