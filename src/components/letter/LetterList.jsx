import React from "react";
import LetterItem from "./LetterItem";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  text-align: center;
`;

const SectionTitle = styled.p`
  text-align: center;
  text-decoration-line: underline;
  text-decoration-color: #00b1ab;
`;

const SectionUl = styled.ul`
  padding: 0;
  margin: 2px auto;
  width: 50%;
`;

const SectionLi = styled.li`
  list-style-type: none;
`;

export default function LetterList({ letters, text, onDeleted, onEdit }) {
  return (
    <Section>
      <SectionTitle>{text}</SectionTitle>
      <SectionUl>
        <SectionLi>
          {[...letters].map((letter) => (
            <LetterItem
              key={letter.id}
              letter={letter}
              onDeleted={onDeleted}
              onEdit={onEdit}
            />
          ))}
        </SectionLi>
      </SectionUl>
    </Section>
  );
}
