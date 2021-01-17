import React from 'react'
import headerImg from '../images/pythonfordatascience.jpg';
import {ProductConsumer} from '../Context/Context';

export default function Header() {
  return (
    <ProductConsumer>
      {(value)=>{
        return(
          <section className="header">
            <img src={headerImg} alt="header"/>
            <div className="inside-container">
              <div className="texts">
                <h1>
                  Hello I am Kareem!
                </h1>
                <h2>
                  Petroleum Engineer, Full-Stack Web Developer, and Data Scientist
                </h2>
                <a href="mailto:draz@ualberta.ca">Contact Me</a>
              </div>
            </div>

          {/* dark mode button */}
          <div className="btnMode">
            <div className="btnIcons">
              <i className="fas fa-moon"></i>
            </div>
          </div>


          {/* end of dark mode button */}

          </section>
        )
      }}
    </ProductConsumer>
  )
}
