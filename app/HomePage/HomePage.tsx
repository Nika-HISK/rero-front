'use client';

import ArtistSection from '../HomePage/ArtistSection/ArtistSection';
import MusicLibrary from '../HomePage/MusicLibrary/MusicLibrary';
import PopularSectionTitle from '../HomePage/PopularSectionTitle/PopularSectionTitle';
import TopHits from '../HomePage/TopHits/TopHits';

const HomePage = () => {
  return (
    <>
      <PopularSectionTitle />
      <ArtistSection />
      <MusicLibrary />
      <TopHits />
    </>
  );
};

export default HomePage;
