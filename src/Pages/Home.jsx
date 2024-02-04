import React from "react";

import Root from "./Root";
import Header from "../components/layout/Header";
import Navbar from "../components/layout/Navbar";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar detail="전체 편지📭" />
      <Root />
    </div>
  );
}
