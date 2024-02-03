import React, { useState } from "react";
import Button from "../Button";
import styled from "styled-components";

export default function LetterEditModal({ edit, onClose, onSubmit }) {
  const [editedContent, setEditedContent] = useState([edit.content]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContent = e.target.editContent.value;

    if (edit.content === newContent) {
      alert("변경된 내용이 없습니다.😣");
      return;
    }

    onSubmit({
      ...edit,
      content: newContent,
    });
    onClose();
  };

  const getdate = edit.date.toLocaleString("ko-KR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ModalForm onSubmit={handleSubmit}>
      <Modal1Box>
        <ModalH1>닉네임: {edit.nickname}</ModalH1>
        <ModalH1>작성일자: {getdate}</ModalH1>
      </Modal1Box>
      <ModalTextarea
        name="editContent"
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
      />
      <ModalButtons>
        <Button text="완료" line="underline" color="#00B1AB" />
        <Button //
          text="취소"
          line="underline"
          color="#00B1AB"
          onClick={onClose}
        />
      </ModalButtons>
    </ModalForm>
  );
}

const ModalForm = styled.form`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 50%;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 1000;

  background-color: black;
  border: 1px solid white;
`;

const Modal1Box = styled.div`
  margin-top: 5rem;

  font-size: 20px;
`;

const ModalH1 = styled.h1`
  display: flex;
  flex-direction: column;
  margin-left: 20%;

  font-size: 15px;

  @media screen and (max-width: 900px) {
    font-size: 10px;
    margin-left: 5%;
    margin-left: 20%;
  }
`;

const ModalTextarea = styled.textarea`
  margin: auto;
  width: 60%;
  height: 30%;
  font-size: 10px;
`;

const ModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
