import React from "react"
import styled from 'styled-components';
import { FiCheck } from "react-icons/fi"
import COLOR from "../../../../variables/color";

interface Props {
  onClick: VoidFunction,
}

export const CheckButton: React.VFC<Props> = ({onClick}) => {

  return (
    <StyledButton onClick={ onClick }>
      <FiCheck className="check-icon"/>
    </StyledButton>

  );
};

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  background: none;
  cursor: pointer;
  border: 2px solid ${COLOR.WHITE};
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    transform: scale(4);
    opacity: 0;
    transition: 0.2s;
    color: ${COLOR.LIGHT_BLUE};
  }

  &:hover > .check-icon {
    display: block;
    opacity: 1;
  }

`