import { createContext, useState } from "react";

const dummyData = [
  {
    id: "1",
    content: "너무 심각할 것 없어. 잘 될 거야, 시간을 가져.",
    nickname: "찰리 브라운",
    date: new Date("2024-02-03"),
    personName: "hwasa",
  },
  {
    id: "2",
    content: "추억을 생각해. 추억은 그대로 있는거야. 행복한 기억이야.",
    nickname: "스누피",
    date: new Date("2024-02-04"),
    personName: "wheEin",
  },
  {
    id: "3",
    content:
      "나에겐 철학이 있어. 어려운 일이 있다면, 언젠가는 좋은 일도 있다는거야.",
    nickname: "우드스톡",
    date: new Date("2024-02-05"),
    personName: "hwasa",
  },
  {
    id: "4",
    content: "신나는걸 쫓아가는데 그걸 막을 수 없어.",
    nickname: "샐리 브라운",
    date: new Date("2024-02-06"),
    personName: "wheEin",
  },
  {
    id: "5",
    content: "너무 심각하게 생각 마. 나도 수많은 멍청한 짓을 하면서 살고 있어.",
    nickname: "루시 반 펠트",
    date: new Date("2024-02-07"),
    personName: "hwasa",
  },
  {
    id: "6",
    content:
      "누구나 중대한 결정을 해야 할 때가 있어. 그 땐 자신의 믿음을 따라야해",
    nickname: "라이너스 반 펠트",
    date: new Date("2024-02-08"),
    personName: "wheEin",
  },
  {
    id: "7",
    content: "내 인생도 그럴 것 같아. 모든게 잘 될 것만 같아",
    nickname: "리런 반 펠트",
    date: new Date("2024-02-09"),
    personName: "moon",
  },
  {
    id: "8",
    content: "세상에 맛있는 음식을 다 먹어보는게 꿈이야",
    nickname: "페퍼민트 패티",
    date: new Date("2024-02-10"),
    personName: "solar",
  },
  {
    id: "9",
    content: "걱정하는게 걱정이야",
    nickname: "마시",
    date: new Date("2024-02-11"),
    personName: "solar",
  },
  {
    id: "10",
    content: "이를 악물고 해내는 거야. 항상 방법은 있어",
    nickname: "바이올렛 그레이",
    date: new Date("2024-02-12"),
    personName: "moon",
  },
];

export const LetterContext = createContext();

const LetterProvider = ({ children }) => {
  const [letters, setLetters] = useState(dummyData);
  const [edit, setEdit] = useState(null);
  const [modal, setModal] = useState(false);

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
    <LetterContext.Provider
      value={{
        letters,
        setLetters,
        edit,
        setEdit,
        modal,
        setModal,
        onDeleted,
        onEdit,
        onSubmit,
        onClose,
      }}
    >
      {children}
    </LetterContext.Provider>
  );
};

export default LetterProvider;
