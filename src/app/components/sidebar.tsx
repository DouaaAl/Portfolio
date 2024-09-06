"use client"
import React, {useState, useEffect} from 'react'
import Face from "../../../public/face.jpg";
import Linkdin from "../../../public/icons/LinkedIn.png";
import Email from "../../../public/icons/Email.png";
import Github from "../../../public/icons/GitHub.png"
import Resume from "../../../public/icons/Resume.png";
import Phone from "../../../public/icons/Phone.png"
import Image from 'next/image';
import "../styles/sidebar.css"



const sidebar = () => {

  return (
    <div className='sidebar  bg-100 h-screen flex flex-col content-center text-center'>
      <Image className="face"
      alt='face'
        src={Face}
      />
      <h1 className='title'>Douaa El Mahraoui</h1>
      <h3 className='sub-title'>Full-stack engineer</h3>
      <article className='icons'>
        <Image className='icon'
        alt='Linkdin'
        src={Linkdin}
        />
        <Image
        className='icon'
        alt='Email'
        src={Email}
        />
        <Image
        className='icon'
        alt='Github'
        src={Github}
        />
      </article>

        <a href="/resume.pdf" download='resume'>
      <button className='button'>
        <Image
        alt='resume'
        src={Resume}
        />
        Download Resume
      </button>
        </a>
        <a href="https://www.linkedin.com/in/douaa-el-mahraoui-365895258/">
        <button className='button'>
          <Image
          alt='Contat me'
          src={Phone}
          />
          Hire Me
        </button>
        </a>
      </div>
  )
}

export default sidebar