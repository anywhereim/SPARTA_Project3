import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Root from "./Root";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar detail="전체 편지📭" />
      <Root />
    </div>
  );
}
