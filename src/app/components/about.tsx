"use client"
import React from 'react'
import "../styles/about.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const About = () => {

  const [text] = useTypewriter({
    words: ['Full Stack Web Developer', "Front-end Developer", "Back-end Developer"],
    loop: true
    })

  return (
    <section className="about">
        <h1>
        Hello, <br /> 
I am Douaa El Mahraoui <br />
A <span>{text}<Cursor /></span> 
        </h1>
        <h3>
        Versatile Tech Professional with Expertise in Web Development, Design, and Data
        </h3>
        <p>
        I am a versatile professional skilled in full-stack web development, UI/UX design, data science, and data engineering. I build dynamic, user-friendly web applications and create visually engaging interfaces. My expertise in data science and engineering allows me to analyze complex datasets and develop efficient data pipelines, bridging the gap between technology and design to deliver comprehensive solutions.
        </p>
    </section>
  )
}

export default About