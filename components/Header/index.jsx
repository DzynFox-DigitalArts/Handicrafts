import Image from "next/image";
import styles from "./Header.module.css";
import { motion } from "framer-motion";
import {useRef, useEffect} from 'react'

import lottie from 'lottie-web'

const popIn = {
  hide: { opacit: 0, scale: 0 },
  enter: { opacit: 1, scale: 1 },
};

const fadeDown = {
  hide: { opacity: 0, y: -100 },
  enter: { opacity: 1, y: 0 },
};

const Header = ({ children, imgSrc, lottieAnimationData }) => {
  
  const lottieWrapper = useRef(null)

  useEffect(() => {
    if(imgSrc === undefined && lottieAnimationData !== undefined && lottieWrapper !== null) {
      const lottieInstance = lottie.loadAnimation({
        container: lottieWrapper.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: lottieAnimationData
      })
    }
    return () => {
      lottieWrapper = null
    }
  }, [])

  return (
    <div className={styles.ServiceDetailedHeader}>
      <motion.div
        variants={fadeDown}
        initial="hide"
        whileInView={"enter"}
        transition={{ type: "spring" }}
        className={styles.textContent}
      >
        {children}
      </motion.div>
      {imgSrc &&
        <motion.div
          variants={popIn}
          initial="hide"
          whileInView={"enter"}
          transition={{ type: "spring" }}
          className={styles.imgContainer}
        >
          <Image src={imgSrc} layout="fill" priority={true} />  
        </motion.div>
      }
      {lottieAnimationData &&
        <div
          className={styles.lottieAnimation} 
          ref={lottieWrapper}
        >
        </div>
      }
    </div>
  );
};

export default Header;
