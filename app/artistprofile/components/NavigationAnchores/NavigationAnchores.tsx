import ArtistItems from './NavigationItem/NavigationItems';
import NavigationItem from '@/app/Components/NavigationItem/NavigationItem';

const NavigationAnchors = () => {
  return (
    <>
      {ArtistItems.map((item, index) => (
        <NavigationItem key={index} title={item.title} href={item.href} />
      ))}
    </>
  );
};

export default NavigationAnchors;
