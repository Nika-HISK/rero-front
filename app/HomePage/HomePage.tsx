'use client';

import AudioManager from '../Components/Manager/Manager';
import songs from '../Components/SmallPlayer/Utils/dummy-musics';
import ArtistSection from '../HomePage/ArtistSection/ArtistSection';
import MusicLibrary from '../HomePage/MusicLibrary/MusicLibrary';
import PopularSectionTitle from '../HomePage/PopularSectionTitle/PopularSectionTitle';
import TopHits from '../HomePage/TopHits/TopHits';

const HomePage = () => {
  return (
    <>
      <PopularSectionTitle />
      <ArtistSection />
      <AudioManager songs={songs} />
      <MusicLibrary />
      <TopHits />
    </>
  );
};

export default HomePage;
