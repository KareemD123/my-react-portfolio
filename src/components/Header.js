import React from 'react'
import headerImg from '../images/pythonfordatascience.jpg';
import {ProductConsumer} from '../Context/Context';
// import Bounce from 'react-reveal/Bounce';
import ReactWordcloud from 'react-wordcloud';
import words from "./Words";

// import "tippy.js/dist/tippy.css";
// import "tippy.js/animations/scale.css";

export default function Header() {
  return (
    <ProductConsumer>
      {(value)=>{


        const {setClass, darkMode} = value;



        return(
          <section className="header">
            {/* <img src={headerImg} alt="header"/> */}
            <div className="wordcloud" style={{ width:"50%", height: "500px"}}>
              <ReactWordcloud words={words} />
            </div>
            <div className="wordcloudtwo" style={{ width:"50%", height: "500px"}}>
              <ReactWordcloud words={words} />
            </div>
            <div className="wordcloudthree" style={{ width:"50%", height: "500px"}}>
              <ReactWordcloud words={words} />
            </div>
            <div className="inside-container">
              <div className="texts">

                {/* <Bounce right delay={500} duration={2000} cascade>
                <h1>
                I'm Kareem!
                </h1>
                </Bounce>
                <Bounce left delay={2000} duration={2000} cascade>
                <h2>
                Petroleum Engineer, Full-Stack Web Developer, and aspiring Data Scientist
                </h2>
                </Bounce>
                <Bounce bottom delay={4000} duration={2000} cascade>
                <a href="mailto:draz@ualberta.ca" className="contactBtn">Contact</a>
                </Bounce>
                 */}
{/*                 
                <h1>
                I'm Kareem!
                </h1>
                <h2>
                Petroleum Engineer, Full-Stack Web Developer, and aspiring Data Scientist
                </h2>
                <a href="mailto:draz@ualberta.ca" className="contactBtn">Contact</a> */}
                
               
                
              </div>
            </div>

          {/* dark mode button */}
          <div className="btnMode">
            <div className={setClass?"btnIcons newBtnIcons":"btnIcons"} onClick={darkMode}>
              <i className="fas fa-moon"></i>
              <div className={setClass?"newBall ball":"ball"}></div>
              <i className="fas fa-sun"></i>
            </div>
          </div>


          {/* end of dark mode button */}

          </section>
        )
      }}
    </ProductConsumer>
  )
}
