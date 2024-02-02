import React from "react";
import styled from "styled-components";

const Stimg = styled.img`
  width: 60px;
  height: 40px;
`;

const StButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background-color: transparent;
  margin: 10px auto;
  cursor: pointer;
  font-size: 0.5rem;
  color: white;

  &:hover {
    transform: scale(1.1);
    text-decoration-line: ${($props) => $props.line || "none"};
    text-decoration-color: ${($props) => $props.color || "initial"};
  }
`;

export default function Button({ text, url, onClick, line, color }) {
  return (
    <StButton onClick={onClick} $line={line} $color={color}>
      {url && <Stimg src={url} />}
      {text}
    </StButton>
  );
}
