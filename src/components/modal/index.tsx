import React, { useEffect } from 'react';
import * as S from './styles';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
};

const Modal = ({ isOpen, onClose, children, title }: Props) => {
  // Fecha o modal ao pressionar Esc
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal
        onClick={(e: React.MouseEvent) => e.stopPropagation()} // Impede que cliques no modal fechem ele
        role="dialog"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {title && (
          <S.Header>
            <S.Title id="modal-title">{title}</S.Title>
            <S.CloseButton onClick={onClose} aria-label="Fechar modal">
              &times;
            </S.CloseButton>
          </S.Header>
        )}
        <S.Content>{children}</S.Content>
      </S.Modal>
    </S.Overlay>
  );
};

export default Modal;