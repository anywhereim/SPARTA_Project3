import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Root from "./Root";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar detail="게시글" />
      <Root />
    </div>
  );
}
