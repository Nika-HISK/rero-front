import Image from "next/image";
import Link from "next/link";
import styles from "./Arrow.module.scss";

const ArrowLink = () => (
  <Link href="" className={styles.arrow}>
    <Image src="/Arroww.png" alt="arrow" width={32} height={32} />
  </Link>
);

export default ArrowLink;
