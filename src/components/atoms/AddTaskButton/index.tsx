import React from "react"
import styled from 'styled-components';
import COLOR from "../../../variables/color";
import { IoMdAddCircleOutline } from "react-icons/io"

interface Props {
  onClick: VoidFunction,
}

export const AddTaskButton: React.VFC<Props> = ({ onClick }) => {

  return (
    <StyledButton onClick={ onClick }>
      <StyledShadow/>
      <StyledWrapper>
        <IoMdAddCircleOutline className="plus-icon"/>
        <StyledText>タスクを追加</StyledText>
      </StyledWrapper>
    </StyledButton>
  );
};

const StyledShadow = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.LIGHT_BLUE};
  border-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.2s;
`;

const StyledButton = styled.button`
  padding: 0;
  position: relative;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;

  & > ${StyledShadow} {
    opacity: 0;
  }

  &:hover {
    & > ${StyledShadow} {
      opacity: 0.2;
    }
  }
`

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 6px;
  color: ${COLOR.LIGHT_BLUE};

  & > .plus-icon {
    width: 20px;
    height: 20px;
  }
`;

const StyledText = styled.div`
  font-size: 14px;
  line-height: 20px;
  margin-left: 10px;
`;