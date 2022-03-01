import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio4.png'
import IMG2 from '../../assets/portfolio1.png'
import IMG3 from '../../assets/portfolio7.png'
import IMG4 from '../../assets/portfolio3.png'
import IMG5 from '../../assets/portfolio2.png'
import IMG6 from '../../assets/portfolio5.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Helpinter(On Progress)',
    github: '',
    demo: 'https://www.figma.com/file/jEjSK3ZdCiiE3R0SpP4ed1/Untitled?node-id=0%3A1',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Shopgrids',
    github: 'https://github.com/vysakhkannan/Shopgrids_Ecommerce',
    demo: 'https://shopgrids.vysakh811.tech/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Personel Website',
    github: 'https://github.com/vysakhkannan/Portfolio',
    demo: '',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Notes App',
    github: 'https://github.com/vysakhkannan/Note-App-using-Reactjs-Frontend',
    demo: 'https://github.com/vysakhkannan/Note-App-using-Reactjs-Frontend',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Film and Series Review System',
    github: 'https://github.com/vysakhkannan/Movies-and-TV-Series-Review-system.git',
    demo: 'https://github.com/vysakhkannan/Movies-and-TV-Series-Review-system.git',
  },
  {
    id: 6,
    image: IMG6,
    title: 'SPS Clone',
    github: 'https://github.com/vysakhkannan/Sps-Clone.git',
    demo: 'https://vysakhkannan.github.io/Sps-Clone/',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      
      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio