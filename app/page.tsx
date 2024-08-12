import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Input from "./Components/Input/HeaderInput";
import HeaderInput from "./Components/Input/HeaderInput";

export default function Home() {
  return (
    <>
      <HeaderInput placeholder={"Type something: "} />
    </>
  );
}
