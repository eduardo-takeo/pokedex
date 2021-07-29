import { useContext } from "react";
import { createContext, ReactNode, useState } from "react";

interface ModalContextProps {
  children: ReactNode;
}

interface ModalContextData {
  isVisible: boolean;
  toggleModal: () => void;
}

const ModalContext = createContext({} as ModalContextData);

export const ModalContextProvider = ({ children }: ModalContextProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function toggleModal() {
    setIsVisible(!isVisible);
  }

  return (
    <ModalContext.Provider value={{ isVisible, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Custom Hook
export const useModal = () => {
  return useContext(ModalContext);
};
