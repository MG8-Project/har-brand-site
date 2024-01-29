import { useState, Dispatch, SetStateAction, useEffect } from "react";
type SelectedOptions = {
    [key: string]: string;
};
function useModal(initialValue: any) {
    const [isOpen, setIsOpen] = useState(initialValue);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.addEventListener("touchmove", preventScroll, { passive: false });
        } else {
            document.body.style.overflow = "auto";
            document.removeEventListener("touchmove", preventScroll);
        }
        return () => {
            document.body.style.overflow = "auto";
            document.removeEventListener("touchmove", preventScroll);
        };
    }, [isOpen]);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const switchStatus = () => {
        setIsOpen((prev: boolean) => !prev);
    };
    function preventScroll(event: any) {
        event.preventDefault();
    }

    return [isOpen, openModal, closeModal, switchStatus];
}

export default useModal;
