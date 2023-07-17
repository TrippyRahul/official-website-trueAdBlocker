"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/navbar.module.scss";
import { AiFillChrome } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.links}>
          <li className={styles.logo}>
            <Link href="/">
              <div className="image-container">
                <Image
                  src="/nav-logo.svg"
                  alt="TrueAdBlockerLogo"
                  className="image"
                  fill={true}
                />
              </div>
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.link}>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className={styles.link}>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li className={styles.link}>
            <Link href="/about-us">About us</Link>
          </li>
        </ul>
        <a
          href="https://chrome.google.com/webstore/detail/trueadblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm"
          target="_blank"
        >
          <button className={styles.btn}>
            <AiFillChrome /> Add to Chrome
          </button>
        </a>

        <div
          className={`${styles.mobileMenuBtn}  ${isOpen && styles.animate}`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`${styles.line} ${styles.firstLine}`}></span>
          <span className={`${styles.line} ${styles.middleLine}`}></span>
          <span className={`${styles.line} ${styles.lastLine}`}></span>
        </div>
      </nav>

      {isOpen && (
        <div className={styles.mobile}>
          <ul className={styles.links}>
            <li className={styles.link}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.link}>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className={styles.link}>
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li className={styles.link}>
              <Link href="/about-us">About us</Link>
            </li>
          </ul>
          <a
            href="https://chrome.google.com/webstore/detail/trueadblocker/edhpnfalgkdhdghkdjdnhmnfnomnlobm"
            target="_blank"
          >
            <button className={styles.btn}>
              <AiFillChrome /> Add to Chrome
            </button>
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
