import { memo, ReactNode } from "react";
import styles from "./FirstHeader.module.css";


interface HeadingProps {
  title: ReactNode; 
}

const FirstHeader = memo(({ title }: HeadingProps) => {
return (
  <div className={styles.header}>
    {title}
  </div>
);
});

FirstHeader.displayName = "Heading"; 

export default FirstHeader;

