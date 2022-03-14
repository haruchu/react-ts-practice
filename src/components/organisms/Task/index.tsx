import React, { useState, useEffect, useCallback } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type {
  DropResult,
  DroppableProvided,
  DraggableProvided
} from "react-beautiful-dnd";
import styled from 'styled-components';
import COLOR from "../../../variables/color";
import { AddTaskButton } from "../../atoms/Todo/AddTaskButton";
import {Task} from "../../molecules/Task"

export const Todo: React.VFC = () => {

  type task = {
    id: string,
    name: string,
    state: string,
    initializing: boolean
  }

  const [taskList, setTaskList] = useState<task[]>([]);

  const createId = (): string => {
    const tmpId: string = new Date().getTime().toString(16)
    return `list-${tmpId}`
  }

  const onAddTaskButtonClick = () => {
    const newTask = {
      id: createId(),
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
        id: taskList[index].id,
        state: taskList[index].state,
        name: value,
        initializing: false,
      });
    }
    setTaskList(newTaskList);
  };

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }

      const newState = [...taskList];

      const [removed] = newState.splice(result.source.index, 1);
      newState.splice(result.destination.index, 0, removed);
      setTaskList(newState);
    },
    [taskList]
  );

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="tasks">
          {(provided: DroppableProvided) => (
            // Droppable: ドラッグ＆ドロップできる領域
            <StyledTaskList
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyleType: "none" }} // スタイル調整用
            >
              {taskList
                .filter((task) => task.state === "TODO")
                .map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided: DraggableProvided) => (
                      // Draggable: ドラッグ対象
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <Task
                          key={index}
                          onTaskComplete={() => onTaskComplete(index)}
                          onTaskNameChange={(value: string) => onTaskNameChange(value, index)}
                          taskName={task.name}
                          defaultIsEditing={task.initializing}
                        />
                      </li>
                      )}
                    </Draggable>
                ))}
                {provided.placeholder}
            </StyledTaskList>
          )}
        </Droppable>
      </DragDropContext>
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

const StyledTaskList = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin: 0;
  padding: 0;
  & > * {
    margin-top: 10px;
  }
`;