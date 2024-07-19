"use client";

import BigPlayer from "./Components/BigPlayer/BigPlayer";
import songs from "./Components/SmallPlayer/Utils/dummy-musics";

export default function Home() {
  return (
    <>
      <BigPlayer songs={songs} />
    </>
  );
}
