"use client";

import { StoreProvider } from "easy-peasy";
import { store } from "./store";

interface PropsTypes {
  children: React.ReactNode;
}

const ProvideStore: React.FC<PropsTypes> = ({ children }) => {
  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export default ProvideStore;
