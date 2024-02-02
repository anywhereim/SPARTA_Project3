import React, { useState } from "react";
import Button from "../Button";

export default function LetterEditModal({ edit, onClose, onSubmit }) {
  const [editedContent, setEditedContent] = useState(edit.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContent = e.target.editContent.value;

    if (edit.content === newContent) {
      alert("변경된 내용이 없습니다.😣");
      return;
    }

    onSubmit({ ...edit, content: newContent });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="editContent"
        value={editedContent}
        onChange={(e) => setEditedContent(e.target.value)}
      />
      <Button text="완료" line="underline" color="#00B1AB" />
      <Button //
        text="취소"
        line="underline"
        color="#00B1AB"
        onClick={onClose}
      />
    </form>
  );
}
