import Image from 'next/image';
import styles from './page.module.css';
import { IconsEnum } from './Enums/Icons.enum';
import Icons from './Components/Icons/Icons';

export default function Home() {
  return (
    <>
      <Icons name={'home'} width={36} height={36}  />
    </>
  );
}
