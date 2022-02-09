import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Container, Content, Overlay } from './style';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  zIndex?: number;
  children: ReactNode;
  className?: string;
}

const root = document.getElementById('portal');

const Modal = ({ isOpen, onClose, zIndex, children, className }: Props): JSX.Element => {
  return createPortal(
    <Container visible={isOpen}>
      <Overlay onClick={onClose} zIndex={zIndex} />
      <Content className={className} zIndex={zIndex}>
        {children}
      </Content>
    </Container>,
    root,
  );
};

Modal.defaultProps = {
  zIndex: 100,
};

export default Modal;
