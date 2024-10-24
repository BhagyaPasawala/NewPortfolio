import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='nav'>
            <h1 className='name'> Bhagya Pasawala</h1>
            <div className='nav-links'>
                <a className='contact' href="https://www.linkedin.com/in/bhagya-pasawala-a66251188/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className='contact' href="https://github.com/BhagyaPasawala" target="_blank" rel="noopener noreferrer">Github</a>
                <a className='contact' href="https://www.behance.net/bhagyapasawala" target="_blank" rel="noopener noreferrer">Behance</a>
                <a className='contact' href="/BhagyaPasawalaResume.pdf" target="_blank" rel="noopener noreferrer">Resume </a>
                <a className='contact' href="mailto:bhagya1710@gmail.com">Contact</a>
            </div>
            <div className='about'>
              <h1>
              Front-end developer and designer with over 4 years of experience 
              in design, <br /> web development,  and 3D. I focus on building projects 
              and video games that <br /> inspire me. Here are some of the   projects I have worked on.
              </h1>
            </div>
        </div>
        <div className="vertical-line"></div>
    </div>
  )
}

export default Navbar