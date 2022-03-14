import React, { useState, useCallback } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type {
  DropResult,
  DroppableProvided,
  DraggableProvided
} from "react-beautiful-dnd";
import styled from 'styled-components';

export const Sample: React.VFC = () => {

  const items = [
    {
      id: "1",
      content: <DraggableCard>item 1</DraggableCard>
    },
    {
      id: "2",
      content: <DraggableCard>item 2</DraggableCard>
    },
    {
      id: "3",
      content: <DraggableCard>item 3</DraggableCard>
    }
  ];

  const [state, setState] = useState(items);
  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }

      const newState = [...state];

      const [removed] = newState.splice(result.source.index, 1);
      newState.splice(result.destination.index, 0, removed);
      setState(newState);
    },
    [state]
  );

  return (
    <Wrapper>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="items">
          {(provided: DroppableProvided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ listStyleType: "none" }} // スタイル調整用
            >
              {state.map(({ id, content }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided: DraggableProvided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {content}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 60px;
  display: flex;
  align-content: center;
  justify-content: center;
`

const DraggableCard = styled.div`
  width: 100px;
  height: 50px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  border: white;


`