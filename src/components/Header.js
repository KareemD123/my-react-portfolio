import React from 'react'
import headerImg from '../images/pythonfordatascience.jpg';
import {ProductConsumer} from '../Context/Context';

export default function Header() {
  return (
    <ProductConsumer>
      {(value)=>{


        const {setClass, darkMode} = value;



        return(
          <section className="header">
            <img src={headerImg} alt="header"/>
            <div className="inside-container">
              <div className="texts">
                <h1>
                  Hello I am Kareem!
                </h1>
                <h2>
                  Petroleum Engineer, Full-Stack Web Developer, and aspiring Data Scientist
                </h2>
                <a href="mailto:draz@ualberta.ca" className="contactBtn">Contact</a>
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
