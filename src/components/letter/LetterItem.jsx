import React from "react";
import Button from "../Button";
import styled from "styled-components";

const ItemBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 2px solid whitesmoke;
  border-radius: 30px;
  margin-bottom: 5px;
`;

const ButtonBox = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ShowBox = styled.div`
  display: flex;
  flex-direction: low;
  gap: 10px;
`;

const ShowNickNameDate = styled.h1`
  font-size: 10px;
`;

export default function LetterItem({ letter, onDeleted, onEdit }) {
  const { id, content, nickname, date } = letter;

  const getdate = date.toLocaleString("ko-KR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ItemBox>
      <article>
        <ShowBox>
          <ShowNickNameDate>{nickname}</ShowNickNameDate>
          <ShowNickNameDate>{getdate}</ShowNickNameDate>
        </ShowBox>
        <p>{content}</p>
        <ButtonBox>
          <Button
            text="수정"
            line="underline"
            color="#00B1AB"
            onClick={() => onEdit(id)}
          />
          <Button
            text="삭제"
            onClick={() => onDeleted(id)}
            line="underline"
            color="#00B1AB"
          />
        </ButtonBox>
      </article>
    </ItemBox>
  );
}
