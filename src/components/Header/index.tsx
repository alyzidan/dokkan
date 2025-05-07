"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import Logo from "@/public/logo.svg"; // Your SVG logo file

const navItems = [
  { label: "About us", href: "#", id: "0" },
  { label: "Team", href: "#", id: "1" },
  { label: "Solutions", href: "#", id: "2" },
  { label: "Blog", href: "#", id: "3" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  if (!isMounted) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navbar__container}>
          <a href="/" className={styles.navbar__brand}>
            <Image
              src={Logo}
              alt="Dokkan Logo"
              width={32}
              height={32}
              className={styles.navbar__logo}
            />
            <span className={styles.navbar__brandText}>Dokkan</span>
          </a>
          <div className={styles.navbar__actions}>
            <button className={styles.navbar__button}>Get started</button>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={styles.navbar__container}>
        <a href="/" className={styles.navbar__brand}>
          <Image
            src={Logo}
            alt="Company Logo"
            width={32}
            height={32}
            className={styles.navbar__logo}
          />
          <motion.span
            className={styles.navbar__brandText}
            whileHover={{ scale: 1.05 }}
          >
            Test
          </motion.span>
        </a>

        <motion.div
          className={`${styles.navbar__menu} ${
            isMenuOpen ? styles["navbar__menu--open"] : ""
          }`}
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <ul className={styles.navbar__list}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.navbar__item}>
                <motion.a
                  href={item.href}
                  className={styles.navbar__link}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className={styles.navbar__actions}>
          <button
            type="button"
            className={styles.navbar__toggle}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <motion.span
              className={styles.navbar__toggleIcon}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
          <motion.button
            type="button"
            className={`${styles.navbar__button} hidden md:block`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Dashboard →
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
