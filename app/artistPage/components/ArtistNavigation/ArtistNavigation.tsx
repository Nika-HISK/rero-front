import { navigationArtistItems } from '@/app/Constants/dummyJson/dummyJson';
import NavigationAnchors from '../NavigationAnchores/NavigationAnchores';
import styles from './ArtistNavigation.module.scss';

const ArtistNavigation = () => {
  return (
    <div className={styles.navigationBartwo}>
      <NavigationAnchors map={navigationArtistItems} />
    </div>
  );
};

export default ArtistNavigation;
