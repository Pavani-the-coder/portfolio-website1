import React from 'react'
import './portfolio.css'
import tip from '../../Assets/tip.jpg'
import np from '../../Assets/notes app.jpg'
import cp from '../../Assets/color app.jpg'
import tic from '../../Assets/tics.jpg'
import rp from '../../Assets/revlop landing page.jpg'



const data=
[
{
  id: 1,
  image: np,
  title:'Notes Maker',
  github:'https://github.com/Pavani-the-coder/notes-app',
  demo:'https://64bcd51991c0a37261f95362--adorable-quokka-ac9633.netlify.app/'
},

{
  id: 2,
  image: tip,
  title:'Tip Calculator',
  github:'https://github.com/Pavani-the-coder/Tip_calculator',
  demo:'https://64bcd30dc252e070f0127018--fantastic-paletas-d42986.netlify.app/'
},
{
  id: 3,
  image: cp,
  title:'Color Palatter generator',
  github:'https://github.com/Pavani-the-coder/random-color-palatte',
  demo:'https://64bcd869a116007378680772--kaleidoscopic-cendol-2fe028.netlify.app/'
},
{
  id: 4,
  image: rp,
  title:'Landing Page',
  github:'https://github.com/Pavani-the-coder/dummy-landing-page',
  demo:'https://64bcdcfb91c0a3763df953d6--gleaming-khapse-2f9a95.netlify.app/#'
},


{
  id: 5,
  image: tic,
  title:'Tic-Tac-Toe',
  github:'https://github.com/Pavani-the-coder/games-are-fun',
  demo:'https://games-are-fun.vercel.app/'
},

{
  id: 6,
  image: tip,
  title:'Calculator using java',
  github:'https://github.com/Pavani-the-coder/java-jui-calci',
}
]



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
        data.map(({id,image,title,github,demo})=>{
            return(
              <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary'>Live demo</a>
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