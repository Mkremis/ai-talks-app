import { useState } from 'react';

const useModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleCloseModal = (e)=>{
    if (!e.target.matches('.menu *') && isOpen) closeModal()
  }
  return [isOpen, openModal, closeModal, handleCloseModal];
};
export default useModal;
