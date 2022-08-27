import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";
import styles from './navbar.module.css'
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.branding}>
                    <div className={styles.logoImage}>
                        <Image src="/images/logo.png" layout='fill' priority/>
                    </div>
                </div>

                <div className={styles.navLinks}>
                    <ul className={
                        !isOpen ? styles.ul : `${styles.ul} ${styles.active}`}
                        onClick={() => setIsOpen(false)}>
                        <li> <a href='https://dzynfox.com' target="_blank" rel="noreferrer">Home</a></li>
                        <li>  <a href='https://dzynfox.com/#contact' target="_blank" rel="noreferrer">Contact us</a> </li>
                    </ul>
                    <button
                        className={
                            isOpen === false
                                ? styles.hamburger
                                : styles.hamburger + " " + styles.active
                        }
                        onClick={openMenu}
                    >
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                        <span className={styles.bar}></span>
                    </button>
                </div>
            </nav >
        </div >
    )
}

export default Navbar