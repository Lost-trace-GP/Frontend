import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import confusion from "../../../assets/images/confusion.png";
import Link from 'next/link';
import {   Button  } from 'react-bootstrap';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo & Name */}
      <div className={styles.headerContent}>
        <Image src={confusion} alt="logo" width={80} height={80} />
        <h1 className={styles.logoText}>Lost</h1>
      </div>

      {/* Navbar Links */}
      <nav className={styles.navbar}>
        <Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`}>
          Home
        </Link>
        <Link href="/Report" className={styles.navLink}>
          Report
        </Link>
        <Link href="/Search" className={styles.navLink}>
          Search
        </Link>
      </nav>

      {/* Buttons */}
      <div className={styles.buttonContainer}>
        <Link href="/Login" passHref>
          <Button variant="primary" className={styles.button}>
            Login
          </Button>
        </Link>
        <Link href="/Register" passHref>
          <Button variant="primary" className={styles.button}>
            Register
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;