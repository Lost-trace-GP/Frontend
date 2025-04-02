import { Container } from "react-bootstrap";
import styles from "./page.module.css";
import { FirstHeader, LandingPage } from "../components/common";
const { container  } = styles

export default function Home() {
  return (
    <>
      <Container className={container}>
        <FirstHeader
          title={
            <>
              Find the <span className={styles.lost}>Lost </span>, Reunite
              Families
            </>
          }
        />
        <LandingPage />
        
      </Container>
    </>
  );
}
