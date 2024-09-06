import React from 'react'
import "../styles/experience.css"
import Arrow from "../../../public/main/arrow.png"
import Image from 'next/image'
import "../styles/experience.css"
import Tailwindcss from "../../../public/skills/tailwindcss.png"
import Reactjs from "../../../public/skills/reactjs.png"
import Nextjs from "../../../public/skills/nextjs.png"
import Mongoose from "../../../public/skills/mongoose.png"
import Mongodb from "../../../public/skills/mongodb.png"
import Flask from "../../../public/skills/flask.png"
import Fastapi from "../../../public/skills/fastapi.png"
import Express from "../../../public/skills/express.png"
import Angular from "../../../public/skills/angular.png"



const Experience = () => {
  return (
    <section className="experience">
      <h1>Experience</h1>
      <div className="experience-container">
        <article className="experience-card">
          <div className='card-title'>
            <h3>Full-stack Developer</h3>
            <div className="date">
              <h4>23/06/2024</h4>
              <Image
              alt="arrow"
              src={Arrow}
              />
              <h4>06/07/2024</h4>
            </div>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ex quas aliquam libero officia, error voluptas amet nihil exercitationem, soluta ullam tenetur. Porro, veritatis nisi!</p>
        </article>
        <article className="experience-card">
          <div className='card-title'>
            <h3>Full-stack Developer</h3>
            <div className="date">
              <h4>23/06/2024</h4>
              <Image
              alt="arrow"
              src={Arrow}
              />
              <h4>06/07/2024</h4>
            </div>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ex quas aliquam libero officia, error voluptas amet nihil exercitationem, soluta ullam tenetur. Porro, veritatis nisi!</p>
        </article>
        <article className="experience-card">
          <div className='card-title'>
            <h3>Full-stack Developer</h3>
            <div className="date">
              <h4>23/06/2024</h4>
              <Image
              alt="arrow"
              src={Arrow}
              />
              <h4>06/07/2024</h4>
            </div>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ex quas aliquam libero officia, error voluptas amet nihil exercitationem, soluta ullam tenetur. Porro, veritatis nisi!</p>
        </article>
      </div>
      <div className="skills-container">
        <h1 className='py-10'>Skills</h1>
       <div className="skills-grid">
        <Image
        alt='tailwincss'
        src={Tailwindcss}
        />
        <Image
        alt='reactjs'
        src={Reactjs}
        />
        <Image
        alt='nextjs'
        src={Nextjs}
        />
        <Image
        alt='mongoose'
        src={Mongoose}
        />
        <Image
        alt='mongodb'
        src={Mongodb}
        />
        <Image
        alt='flask'
        src={Flask}
        />
        <Image
        alt='fastapi'
        src={Fastapi}
        />
        <Image
        alt='express'
        src={Express}
        />
        <Image
        alt='angular'
        src={Angular}
        />
       </div>
      </div>
    </section>
  )
}

export default Experience