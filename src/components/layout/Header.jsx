import React from "react";
import styled from "styled-components";

const Stheader = styled.header`
  display: flex;
  border: 1px solid;
  justify-content: center;
  width: 100%;
  background-color: white;
`;

const Stimg = styled.img`
  width: 300px;
  height: 140px;

  @media (max-width: 900px) {
    width: 200px;
    height: 80px;
  }
`;

export default function Header() {
  return (
    <Stheader>
      <Stimg src="img/logo.png" />
    </Stheader>
  );
}
