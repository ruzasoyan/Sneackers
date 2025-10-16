import { create } from "zustand";

export const useIsOpenBasketStore = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen) => { set({ isOpen }) }
}))


