import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const LetterPage = styled(Link)`
  text-decoration: none;
  margin: 0 50px;
  color: white;
  white-space: nowrap;

  &:hover {
    transform: scale(1.1);
    text-decoration-line: underline;
    text-decoration-color: #00b1ab;
  }
  @media (max-width: 900px) {
    margin: 20px;
  }
`;

const LetterBox = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export default function Root() {
  return (
    <div>
      <LetterBox>
        <LetterPage to="/hwasa">화사</LetterPage>
        <LetterPage to="/moonbyul">문별</LetterPage>
        <LetterPage to="/solar">솔라</LetterPage>
        <LetterPage to="/wheein">휘인</LetterPage>
      </LetterBox>
      <Outlet />
    </div>
  );
}
