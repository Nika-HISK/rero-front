import Navigation from "../Navgiation/Navigation";
import { NavigationPropsInterface } from "../Navgiation/intefaces";

interface Props {
  map: NavigationPropsInterface[];
}

const NavigationAnchors = ({ map }: Props) => {
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
