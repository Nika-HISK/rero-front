import Navigation from '../Navgiation/Navigation';
import { NavigationMapPropsInterface } from '../Navgiation/interfaces/navigation-props.interface';

const NavigationAnchors = ({ map }: NavigationMapPropsInterface) => {
  return (
    <>
      {map.map((item, index) => (
        <Navigation
          key={index}
          title={item.title}
          link={item.link}
          isActive={index === 2}
        />
      ))}
    </>
  );
};

export default NavigationAnchors;
