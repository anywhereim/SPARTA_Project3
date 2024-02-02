import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Stnav = styled.nav`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 20px;
  color: white;
  text-decoration-line: underline;
  text-decoration-color: #00b1ab;
`;

const Stlink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export default function Navbar({ detail, home }) {
  return (
    <Stnav>
      <Stlink to="detail">{detail}</Stlink>
      <Stlink to="/">{home}</Stlink>
    </Stnav>
  );
}
