import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

let modal = document.getElementById('modal');

if (!modal) {
  modal = document.createElement('div');
  modal.setAttribute('id', 'modal');
  document.body.appendChild(modal);
}

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;
`;

const BaseModal = ({ children, onClose }) => {
  const overlayRef = useRef();

  const onOverlayClick = (e) => {
    const { target } = e;

    if (onClose && target === overlayRef.current) {
      onClose(e);
    }
  };

  const onEscape = (e) => {
    const event = e || window.event;
    let isEscape = false;
    if ('key' in event) {
      isEscape = event.key === 'Escape' || event.key === 'Esc';
    } else {
      isEscape = event.keyCode === 27;
    }
    if (isEscape) {
      if (onClose) {
        onClose(e);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', onEscape);

    return () => document.removeEventListener('keyup', onEscape);
  });

  return ReactDOM.createPortal(
    <Overlay ref={overlayRef} onClick={onOverlayClick} data-testid="overlay">
      {children}
    </Overlay>,
    modal
  );
};

export default BaseModal;
