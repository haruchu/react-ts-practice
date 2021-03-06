import React, {useState} from "react"
import styled from 'styled-components';
import COLOR from "../../../variables/color";
import { CheckButton } from "../../atoms/Todo/CheckButton";
import { Input } from "../../atoms/Todo/Input";
import { EditButton } from "../../atoms/Todo/EditButton";

type onTaskNameChangeType = (something: string) => void;


interface Props {
  onTaskNameChange: onTaskNameChangeType,
  onTaskComplete: VoidFunction,
  taskName: string,
  defaultIsEditing: boolean,
}

export const Task: React.VFC<Props> = ({ onTaskNameChange, onTaskComplete, taskName = "", defaultIsEditing = false }) => {

  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value: string) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };

  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
      <StyledCheckButtonWrapper>
        <CheckButton onClick={onTaskComplete}/>
      </StyledCheckButtonWrapper>
      {isEditing ?
        (
          <Input onEditComplete={onEditComplete} defaultValue={taskName} />
        ) :
        (
          <StyledContentWrapper>
            <StyledTaskName>{taskName}</StyledTaskName>
            <StyledEditButtonWrapper>
              <EditButton onClick={onEditButtonClick} />
            </StyledEditButtonWrapper>
          </StyledContentWrapper>
        )
      }
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 6px;
  overflow: hidden;
  background-color: ${COLOR.BLACK};
`;

const StyledCheckButtonWrapper = styled.div`
  margin-right: 10px;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  overflow: hidden;
`;

const StyledTaskName = styled.div`
  font-size: 14px;
  line-height: 20px;;
  color: ${COLOR.WHITE};
  flex: 1 1 auto;
  margin-right: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledEditButtonWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
`;
