import React, { useEffect, useRef } from "react"
import styled from 'styled-components';
import COLOR from "../../../variables/color";

interface Props {
  defaultValue: string,
  onEditComplete: VoidFunction
}

export const Input: React.VFC<Props> = ({ defaultValue = "" }) => {
  const InputRef = useRef<HTMLInputElement>(null!);

  //仮のonEditComplete(動作確認)
  function onEditComplete(value: string) {
    console.log(value);
  }

  useEffect(() => {
    InputRef.current.value = defaultValue;
    InputRef.current.focus();

    const onFocusOut = () => onEditComplete(InputRef.current.value);

    InputRef.current.addEventListener("focusout", onFocusOut);
    InputRef.current.addEventListener("keypress", (event) => {
      if (event.key !== "Enter") return;
      InputRef.current.removeEventListener("focusout", onFocusOut);
      onEditComplete(InputRef.current.value);
    });

  }, []);

  return (
    <StyledInput ref={ InputRef }/>
  );
};

const StyledInput = styled.input`
  outline: none;
  border: none;
  color: ${COLOR.WHITE};
  background-color: ${COLOR.BLACK};
  font-size: 14px;
  line-height: 20px;
  width: 100%;
  border-radius: 2px;
  padding: 0 4px;
`