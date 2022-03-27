import { FC, createContext, useState } from "react";

export type ModalContextType = {
  modal: boolean;
  setModal: (value: boolean) => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);


export const ContentProvider: FC = ({ children }) => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  );
};
