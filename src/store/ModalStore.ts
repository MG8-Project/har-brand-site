import { create } from "zustand";

export const useModalStore = create<any>((set: any) => ({
    isModalOpen: false,
    setIsModalOpen: (isModalOpen: string) =>
        set(() => {
            return { isModalOpen: isModalOpen };
        }),
}));