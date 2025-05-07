"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "@/public/logo.svg";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Enterprise", "Changelog"],
  },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Resources", links: ["Docs", "Help", "API Status", "Partners"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
];

export default function Footer() {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.footer__container}>
        <div className={styles.footer__columns}>
          <div className={styles.footer__column}>
            <h4 className="text-center md:text-left">
              <Image
                src={Logo}
                alt="Dokkan Logo"
                width={32}
                height={32}
                className={styles.navbar__logo}
              />
            </h4>
            <a className="text-center md:text-left" href="#">
              Dokkan Frontend test
            </a>
            <a className="text-center md:text-left" href="#">
              GDPR
            </a>
            <a className="text-center md:text-left" href="#">
              Terms of service
            </a>
          </div>
          <div className={styles.footer__column}>
            <h4 className="text-center md:text-left">Home</h4>
            <a className="text-center md:text-left" href="#">
              Features
            </a>
            <a className="text-center md:text-left" href="#">
              Pricing
            </a>
          </div>
          <div className={styles.footer__column}>
            <h4 className="text-center md:text-left">About Us</h4>
            <a className="text-center md:text-left" href="#">
              Integrations
            </a>
            <a className="text-center md:text-left" href="#">
              FAQs
            </a>
          </div>
          <div className={styles.footer__column}>
            <h4 className="text-center md:text-left">Blog</h4>
            <a className="text-center md:text-left" href="#">
              Contact Us
            </a>
            <a className="text-center md:text-left" href="#">
              Terms & Policies
            </a>
          </div>
          <div className={styles.footer__column}>
            <h4 className="text-center md:text-left">Contact</h4>
            <p className="text-center md:text-left">dokan@test.sa</p>
            <p className="text-center md:text-left">+999-234-324</p>
            <p className="text-center md:text-left">Saudi Arabia, Jeddah</p>
          </div>
        </div>

        {/* Other Columns */}
        {/* {footerLinks.map((section) => (
          <div key={section.title} className={styles.footer__col}>
            <h4 className={styles.footer__heading}>{section.title}</h4>
            <ul className={styles.footer__list}>
              {section.links.map((link) => (
                <li key={link} className={styles.footer__listItem}>
                  <motion.a
                    href="#"
                    className={styles.footer__link}
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
        ))} */}
      </div>

      {/* Copyright */}
      <div className={styles.footer__copyright}>
        <span>© {new Date().getFullYear()} Your Brand</span>
        <div className={styles.footer__legalLinks}>
          {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
            (text) => (
              <motion.a
                key={text}
                href="#"
                className={styles.footer__legalLink}
                whileHover={{ scale: 1.05 }}
              >
                {text}
              </motion.a>
            )
          )}
        </div>
      </div>
    </motion.footer>
  );
}
