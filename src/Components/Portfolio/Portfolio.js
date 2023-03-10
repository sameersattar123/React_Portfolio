import React from 'react'
import "./Portfolio.css"
// import me from "../../Assets/images/109748943.png"
import pic1 from "../../Assets/images/pic1.jpg"
import pic2 from "../../Assets/images/pic2.jpg"
import pic from "../../Assets/images/pic.jpg"
import pic8 from "../../Assets/images/pic8.jpg"
import pic5 from "../../Assets/images/pic5.jpg"
import pic6 from "../../Assets/images/pic6.jpg"

const Portfolio = () => {
  const data = [
    {
      id:"3",
      title:"React Movie Application",
      img : pic6,
      github:"https://github.com/sameersattar123/Movies-and-Tv-Searching-App",
      livedemo:"https://melodic-nougat-a0f3fc.netlify.app/?fbclid=IwAR2CjoI0cJWY7B-fVwqoELZcUiLG8NGdEO_uAPmeIEzu4p-VBXv5V6Ft9pI"
    },
    {
      id:"5",
      title:"React GPT-3 Website",
      img: pic5,
      github:"https://github.com/sameersattar123/React_AI_Website",
      livedemo:"https://react-ai-website.netlify.app/?fbclid=IwAR31aPU8L3seQerTlsgVqcVyZqct78ZERPht3OTGS6ryrMLaxvU_hwAHF-8"
    },
    {
      id:"2",
      title:"React Tesla Clone",
      img: pic2,
      github:"https://github.com/sameersattar123/React-tesla-clone",
      livedemo:"https://tesla-clone-v.netlify.app/?fbclid=IwAR2bJimI_rGfrwPLk23l-A6AHgn7Dow5odOfbm9D6zMp9WQZh3G4yLb7-pg"
    },
    {
      id:"0",
      title:"React Crypto Price Application",
      img: pic,
      github:"https://github.com/sameersattar123/React_Crypto_Price_App",
      livedemo:"https://crypt-app.netlify.app/?fbclid=IwAR1y09t7daw6Cavv6Aco6sJcnDs21Um0r6wFSvyYB6tgJVF4N0XN9eHotIw"
    },
    {
      id:"1",
      title:"React Budget Planner Application",
      img: pic1,
      github:"https://github.com/sameersattar123/React_Budget_App",
      livedemo:"https://budget-app-v1.netlify.app/?fbclid=IwAR2sLQ0uEnwZ_qOliYiyJB11d_L3QHpvfSGYpQ3-oxFd6i3g93ZWUYuG8B4"
    },
    {
      id:"4",
      title:"React Tic Tac Toe Game",
      img: pic8,
      github:"https://github.com/sameersattar123/React_Tic_Tac_Toe_App",
      livedemo:"https://remarkable-mousse-80abe9.netlify.app/?fbclid=IwAR1OMERu_ULGsoGUG9XeT2isB_Wxm6WreU0uf8gq9N9U-X58rHJCTnhO6_A"
    },
  ]
  return (
   <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
    {
      data.map(({id , title , img , github , livedemo})=>{
        return(
      <article className="portfolio__item" key={id}>
      <div className="portfolio__item-images">
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <div className="portfolio__item-cta">
      <a href={github} target={"_blank"}  rel="noreferrer" className="btn">Github</a>
      <a href={livedemo} target={"_blank"}  rel="noreferrer" className="btn btn-primary">Live Demo</a>
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
