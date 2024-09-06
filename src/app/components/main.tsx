"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import Styles from "../styles/main.module.css";
import Contact from './contact';
import Projects from './projects';
import Experience from './experience';
import About from './about';

const Main =(children: any) => {
  return (
    <section className={Styles.mainpage}>
        <Image
        className={Styles.landscape}
        alt="landscape"
        src="/main/landscape.png"
        height={35}
        width={34}
        />
        <Image
        className={Styles.moon}
        alt='moon'
        src="/main/moon.png"
        width={35}
        height={35}
        />
        <Image
        className={Styles.shooting_stars}
        alt='shooting stars'
        src="/main/shootingstar.png"
        height={35}
        width={35}
        />
        <Image
        className={Styles.stars}
        alt='stars'
        src="/main/stars.png"
        height={35}
        width={35}
        />
        <Image
        className={Styles.planet}
        alt='planet'
        src="/main/constellation.png"
        height={35}
        width={35}
        />

       {children.page == "contact" && <Contact />} 
       {children.page == "projects" && <Projects />} 
       {children.page == "experience" && <Experience />} 
       {children.page == "about" && <About />}       

    </section>
  )
}

export default Main