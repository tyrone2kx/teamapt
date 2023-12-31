import { useState } from 'react';

const useDisclosure = (def=false) => {
  const [isOpen, setIsOpen] = useState<boolean>(def);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const toggle = () => setIsOpen(!isOpen);

  return {
    onClose,
    onOpen,
    isOpen,
    toggle,
  };
};

export default useDisclosure;
