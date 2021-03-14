import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 105px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  color: #4b79b4;
  background-color: #cae5f5;
  border: none;
  outline: none;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    color: #97a0ac;
    cursor: default;
  }

  ${({ $variant }) => $variant === 'secondary' && css`
      border: 1px solid #4b79b4;
      background-color: #ffffff;
    `};
`;

const Button = (props) => {
  const {
    variant,
    type,
    text,
    className,
    onClick,
    disabled
  } = props;

  return (
    <StyledButton
      $variant={variant}
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: 'main',
  type: 'button',
  text: 'Yes',
  className: '',
  disabled: false
};

Button.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default Button;
