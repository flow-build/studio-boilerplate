import React from 'react';

export const useMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentMenuPath, setCurrentMenuPath] = React.useState('children');
  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      const body = document.getElementsByTagName('body')[0];
      body.style.overflow = 'initial';
    }, 300);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleGoBack = (path: string) => () => {
    setCurrentMenuPath(path);
  };

  return {
    isOpen,
    currentMenuPath,
    handleOpen,
    handleClose,
    handleGoBack
  };
};
