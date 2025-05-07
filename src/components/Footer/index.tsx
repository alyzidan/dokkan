"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "@/public/logo.svg";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

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
          <div
            className={`${styles.footer__column} ${styles.footer__columnFirst}`}
          >
            <h4 className="text-center md:text-left">
              <Image
                src={Logo}
                alt="Dokkan Logo"
                width={32}
                height={32}
                className={`${styles.navbar__logo} mx-auto md:mx-0`}
              />
            </h4>
            <p className={styles.footer__link}>Dokkan Frontend test</p>
            <div className="flex my-2 flex-row items-center  gap-4">
              <a href="/">
                <Facebook size={20} color="#606060" size={20} />
              </a>
              <a href="/">
                <Instagram color="#606060" size={20} />
              </a>
              <a href="/">
                <Linkedin color="#606060" size={20} />
              </a>
              <a href="/">
                <Twitter color="#606060" size={20} />
              </a>
            </div>
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
            <h4 className="text-center md:text-left">Our Contact</h4>
            <p className="text-center md:text-left">
              <Mail color="#c2c2c2" className="mr-2" size={16} /> dokan@test.sa
            </p>
            <p className="text-center md:text-left">
              <Phone color="#c2c2c2" className="mr-2 " size={16} /> +999-234-324
            </p>
            <p className="text-center md:text-left">
              <MapPin color="#c2c2c2" className="mr-2 " size={16} /> Saudi,
              Jeddah
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer__copyright}>
        <span>© {new Date().getFullYear()} Your Brand</span>
        <div className={styles.footer__legalLinks}>
          {["Privacy Policy", "GDBR", "Terms of services"].map((text) => (
            <motion.a
              key={text}
              href="#"
              className={styles.footer__legalLink}
              whileHover={{ scale: 1.05 }}
            >
              {text}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
