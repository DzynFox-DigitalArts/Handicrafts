import React from 'react'
import styles from './footer.module.css'
import Link from 'next/link'
const Footer = () => {
    return (
        <>
            <section className={styles.Footer}>
                <div className={styles.FooterContent}>
                    <div className={styles.companyDetails}>
                        <h1 className={styles.sectionHeader}>DzynFox Visual Communications LLP</h1>
                        <p className={styles.p}>A brand of Markall - Marketing All Out </p>
                        <p className={styles.p}>COPYRIGHT &copy; DZYNFOX 2022</p>
                        <p className={styles.attribution}>Images created with the help of <a href="https://www.freepik.com" target="_blank">Freepik</a></p>
                    </div>
                    <div className={styles.address}>
                        <h2 className={styles.h2}>Our Address</h2>
                        <p className={styles.p}>
                            B101-Amrapali <br /> Sector-3, Vaishali <br /> Ghaziabad - 201010 <br />
                            Phone: <a href="tel:+91 93545 66860">+91 93545 66860</a> <br />
                            EMail: <a href="mailto:sales@dzynfox.com">sales@dzynfox.com</a> <br />
                        </p>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Footer