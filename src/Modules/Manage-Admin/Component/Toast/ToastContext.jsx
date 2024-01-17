import { createContext, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const showToast = (message) => {
    toast(message);
  };

  return <ToastContext.Provider value={{ showToast }}>{children}</ToastContext.Provider>;
};

export const useToast = () => {
  return useContext(ToastContext);
};
