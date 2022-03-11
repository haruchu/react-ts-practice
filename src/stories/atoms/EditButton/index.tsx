import React, {useState} from "react"
import styled from 'styled-components';
import {MdModeEdit} from 'react-icons/md'
import COLOR from "../../../variables/color";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const EditButton: React.VFC<Props> = ({onClick}) => {

  return (
    <StyledButton onClick={ onClick }>
      <StyledShadow />
      <MdModeEdit className="edit-icon"/>
    </StyledButton>
  );
};

const StyledShadow = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: 50%;
background-color: ${COLOR.LIGHT_BLUE};
transition: 0.2s;
`

const StyledButton = styled.button`
  width: 20px;
  height: 20px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  color: ${COLOR.WHITE};

  & > .edit-icon {
    width: 100%;
    height: 100%;
  }

  & > ${StyledShadow} {
    opacity: 0;
  }

  &:hover {
    & > ${StyledShadow} {
      opacity: 0.2;
    }
  }

`
