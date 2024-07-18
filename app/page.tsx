'use client'

import Image from "next/image";
import styles from "./page.module.css";
import AudioPlayer from "./Components/AudioPlayer/AudioPlayer";
import songs from "./array";
import MainAudioPlayer from "./Components/MainAudioPlayer/MainAudioPlayer";

export default function Home() {
  return (
    <>
      <MainAudioPlayer songs={songs} />
    </>
  );
}
