import React from "react";
import LetterItem from "./LetterItem";
import styled from "styled-components";

export default function LetterList({
  letters,
  text,
  onDeleted,
  onEdit,
  personName,
}) {
  return (
    <Section>
      <SectionTitle>{text}</SectionTitle>
      <SectionUl>
        {letters
          ?.filter(
            (letters) => !personName || letters.personName === personName
          )
          .map((filteredLetter) => (
            <SectionLi key={filteredLetter.id}>
              <LetterItem
                letter={filteredLetter}
                onDeleted={onDeleted}
                onEdit={onEdit}
              />
            </SectionLi>
          ))}
      </SectionUl>
    </Section>
  );
}

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
  width: 40%;
`;

const SectionLi = styled.li`
  list-style-type: none;
`;
