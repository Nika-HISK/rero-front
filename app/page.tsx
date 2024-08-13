import Image from 'next/image';
import styles from './page.module.css';

import Icons from './Components/Icons/Icon';

export default function Home() {
  return (
    <>
    <div className={styles.container}> 

      <Icons name={'miniadd'} width={30} height={30}  />
    </div>
    </>
  );
}
