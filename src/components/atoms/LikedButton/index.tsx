import React, {useState} from "react"
import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

export const LikedButton: React.VFC = () => {
  const [isLiked, setIsLiked] = useState(false)   // boolean型

  return (
    <StyledLikedButton onClick={() => {setIsLiked(!isLiked)}}>
      <StyledShadow />
      { isLiked ? (<AiFillHeart/>) : (<AiOutlineHeart />)}
    </StyledLikedButton>
  );
};


const StyledShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #FF3399;
  transition: 0.2s;
`

const StyledLikedButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;

  ${ (isLiked) => isLiked && `color: #FF3399;`}

  & > ${StyledShadow} {
    opacity: 0;
  }

  &:hover {
    color: #FF3399;
    & > ${StyledShadow} {
      opacity: 0.2;
    }
  }

`
