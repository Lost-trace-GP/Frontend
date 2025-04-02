import { memo, ReactNode } from "react";
import styles from "./SecondHeader.module.css";

interface HeadingProps {
  title: ReactNode;
}

const SecondHeader = memo(({ title  }: HeadingProps) => {

  return <div className={styles.secondHeader}>{title}</div>;

});

SecondHeader.displayName = "Heading";

export default SecondHeader;
