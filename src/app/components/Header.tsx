"use client"
import "../styles/header.css"
import Image from "next/image"

const Header = (children: any) => {
  return (
    <header>
      <div className="image">
      <Image
        src="/stars.svg"
        width={400}
        height={300}
        alt="stars"
      />
      <Image
        src="/stars.svg"
        width={400}
        height={300}
        alt="stars"
      />
      <Image
        src="/stars.svg"
        width={400}
        height={300}
        alt="stars"
      />
            <Image
        src="/stars.svg"
        width={400}
        height={300}
        alt="stars"
      />
            <Image
        src="/stars.svg"
        width={400}
        height={300}
        alt="stars"
      />
            <Image
        src="/stars.svg"
        width={400}
        height={300}
        alt="stars"
      />

<Image
        src="/stars.svg"
        width={400}
        height={300}
        alt="stars"
      />
            <Image
        src="/stars.svg"
        width={400}
        height={300}
        alt="stars"
      />
      

      </div>
        <ul>
            <li onClick={()=>children.setPage("about")}>About</li>
            <li onClick={()=>children.setPage("experience")}>Experience</li>
            <li onClick={()=>children.setPage("projects")}>Projects</li>
            <li onClick={()=>children.setPage("contact")}>Contact Us</li>
        </ul>
    </header>
  )
}

export default Header