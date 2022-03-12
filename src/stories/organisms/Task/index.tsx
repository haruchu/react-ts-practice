import React, {useState, useEffect} from "react"
import styled from 'styled-components';
import COLOR from "../../../variables/color";
import { AddTaskButton } from "../../atoms/AddTaskButton";
import {Task} from "../../molecules/Task"

export const Todo: React.VFC = () => {

  type task = {
    name: string,
    state: string,
    initializing: boolean
  }

  const [taskList, setTaskList] = useState<task[]>([]);

  const onAddTaskButtonClick = () => {
    const newTask = {
      name: "",
      state: "TODO",
      initializing: true,
    };
    setTaskList(taskList.concat(newTask));
  };

  const onTaskComplete = (index: number) => {
    let newTaskList = taskList.map((task, idx) => {
      if (idx == index) task.state = "DONE";
      return task;
    });
    setTaskList(newTaskList);
  };

  const onTaskNameChange = (value: string, index: number) => {
    let newTaskList = [...taskList];
    if (value === "") {
      newTaskList.splice(index, 1);
    } else {
      newTaskList.splice(index, 1, {
        state: taskList[index].state,
        name: value,
        initializing: false,
      });
    }
    setTaskList(newTaskList);
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList
          .filter((task) => task.state === "TODO")
          .map((task, index) => (
            <Task
              key={index}
              onTaskComplete={() => onTaskComplete(index)}
              onTaskNameChange={(value: string) => onTaskNameChange(value, index)}
              taskName={task.name}
              defaultIsEditing={task.initializing}
            />
          ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: ${COLOR.BLACK};
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  & > * {
    margin-top: 10px;
  }
`;