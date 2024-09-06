"use client"
import React from 'react'
import Styles from "../styles/projects.module.css"
import Image from 'next/image'

import Link from 'next/link'


const Projects = () => {


  return (
    <section className={Styles.projects}>
        <h1 className={Styles.Title}>Our <span>Projects</span></h1>
        <div className={Styles.projects_container}>
            <article className={Styles.project}>
            <Image className={Styles.project_img}
            alt="project description"
            src="/projects/project1.jpg"
            height={300}
            width={300}
            />
            <article className={Styles.project_txt}>
                <h2>Title</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni, veniam veritatis porro at vel expedita voluptatibus dolor ipsum, enim quos eligendi, nobis dolores. Laboriosam incidunt debitis voluptatibus fuga veritatis dolores, nesciunt sed eaque tempore provident ad consequatur nemo, voluptatem vitae fugit, maiores fugiat earum.
                </p>
                <div className={Styles.skills_used}>
                <span>Nextjs</span>
                    <span>MongoDB</span>
                    <span>Mongoose</span>
                    <span>Express</span>
                    <span>TailwindCss</span>
                </div>
                <Link href="#">
                    <span>Visit Website Here</span>
                </Link>
            </article>
            </article>  
            <article className={Styles.project}>
            <Image className={Styles.project_img}
            alt="project description"
            src="/projects/project1.jpg"
            height={300}
            width={300}
            />
            <article className={Styles.project_txt}>
                <h2>Title</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni, veniam veritatis porro at vel expedita voluptatibus dolor ipsum, enim quos eligendi, nobis dolores. Laboriosam incidunt debitis voluptatibus fuga veritatis dolores, nesciunt sed eaque tempore provident ad consequatur nemo, voluptatem vitae fugit, maiores fugiat earum.
                </p>
                <div className={Styles.skills_used}>
                <span>Nextjs</span>
                    <span>MongoDB</span>
                    <span>Mongoose</span>
                    <span>Express</span>
                    <span>TailwindCss</span>
                </div>
                <Link href="#">
                    <span>Visit Website Here</span>
                </Link>
            </article>
            </article>  
            <article className={Styles.project}>
            <Image className={Styles.project_img}
            alt="project description"
            src="/projects/project1.jpg"
            height={300}
            width={300}
            />
            <article className={Styles.project_txt}>
                <h2>Title</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam magni, veniam veritatis porro at vel expedita voluptatibus dolor ipsum, enim quos eligendi, nobis dolores. Laboriosam incidunt debitis voluptatibus fuga veritatis dolores, nesciunt sed eaque tempore provident ad consequatur nemo, voluptatem vitae fugit, maiores fugiat earum.
                </p>
                <div className={Styles.skills_used}>
                <span>Nextjs</span>
                    <span>MongoDB</span>
                    <span>Mongoose</span>
                    <span>Express</span>
                    <span>TailwindCss</span>
                </div>
                <Link href="#">
                    <span>Visit Website Here</span>
                </Link>
            </article>
            </article>           
        </div>

    </section>
  )
}

export default Projects