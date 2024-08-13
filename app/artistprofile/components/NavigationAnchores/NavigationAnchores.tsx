import NavigationItem from '@/app/Components/NavigationItem/NavigationItem';
import { NavigationPropsInterface } from '@/app/Components/NavigationItem/interfaces/navigation-props.interface';

const NavigationAnchors = () => {
  const navigationItems: NavigationPropsInterface[] = [
    { title: 'Home', href: '/' },
    { title: 'Top Artists', href: '/' },
  ];

  return (
    <>
      {navigationItems.map((item, index) => (
        <NavigationItem
          key={index}
          title={item.title}
          href={item.href}
          isActive={index === 2}
        />
      ))}
    </>
  );
};

export default NavigationAnchors;
