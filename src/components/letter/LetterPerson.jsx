import React, { useState } from "react";
import LetterForm from "../letter/LetterForm";
import LetterList from "../letter/LetterList";
import styled from "styled-components";
import LetterEditModal from "../letter/LetterEditModal";
import { dummyData } from "../DummyData";

const MainForm = styled.main`
  margin: 0;
`;

export default function LetterPerson({
  imgUrl,
  formText,
  personName,
  listText,
}) {
  const [letters, setLetters] = useState(dummyData);
  const [edit, setEdit] = useState(null);
  const [modal, setModal] = useState(false);

  const onAddLetter = (letter) => {
    setLetters((prevLetters) => [letter, ...prevLetters]);
  };

  const onDeleted = (id) => {
    setLetters((prevLetters) =>
      prevLetters.filter((letter) => letter.id !== id)
    );
  };

  const onEdit = (id) => {
    const findLetter = letters.find((letter) => letter.id === id);
    setEdit(findLetter);
    setModal(true);
  };

  const onSubmit = (nextLetter) => {
    setLetters((prevLetters) =>
      prevLetters.map((letter) => {
        if (nextLetter.id === letter.id) {
          return { ...letter, ...nextLetter };
        }
        return letter;
      })
    );
  };

  const onClose = () => {
    setModal(false);
  };

  return (
    <MainForm>
      <LetterForm
        onAddLetter={onAddLetter}
        imgUrl={imgUrl}
        text={formText}
        personName={personName}
      />

      <LetterList
        text={listText}
        letters={letters}
        personName={personName} // 이 부분을 추가
        onDeleted={onDeleted}
        onEdit={onEdit}
      />
      {modal && (
        <LetterEditModal
          letter={letters}
          edit={edit}
          onClose={onClose}
          onSubmit={onSubmit}
        />
      )}
    </MainForm>
  );
}
