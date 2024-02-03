import React from "react";
import Button from "../Button";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const LetterFormBox = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 30px auto;
  width: 40%;
`;

const PersonImg = styled.img`
  width: 130px;
  height: 100px;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const GetLetterInput = styled.input`
  height: 200px;
  background-color: white;
  border-radius: 5px;

  @media (max-width: 1000px) {
    height: 100px;
  }
`;

const GetNickname = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  font-size: 13px;
  margin-top: 10px;
  white-space: nowrap;
`;

const InputNickName = styled.input`
  width: 100%;
`;

export default function LetterForm({ onAddLetter, imgUrl, text, personName }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const content = e.target.content.value;
    const nickname = e.target.nickname.value;
    const date = new Date();

    if (!content || !nickname) {
      alert("편지와 닉네임을 모두 작성해 주세요😁 ");
      return;
    }

    onAddLetter({
      id: uuidv4(),
      content,
      nickname,
      date,
      personName,
    });

    e.target.reset();
  };

  return (
    <LetterFormBox onSubmit={handleSubmit}>
      <PersonImg src={imgUrl} />
      <GetLetterInput
        type="text"
        placeholder={text}
        name="content"
        personName={personName}
      />
      <GetNickname>
        <label htmlFor="nickname">닉네임 : </label>
        <InputNickName id="nickname" type="text" name="nickname" />
      </GetNickname>
      <Button url="/img/crown.png" text="보내기" />
    </LetterFormBox>
  );
}
