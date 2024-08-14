import TopAlbumNavigationItems from './TopAlbumsNavigationItem/TopAlbumsNavigationItem';
import NavigationItem from '@/app/Components/NavigationItem/NavigationItem';

const TopAlbumsNavigationAnchore = () => {
  return (
    <>
      {TopAlbumNavigationItems.map((item, index) => (
        <NavigationItem key={index} title={item.title} href={item.href} />
      ))}
    </>
  );
};

export default TopAlbumsNavigationAnchore;
