import React from 'react';
import Title from './Title';
import AboutLogo from '../images/wordify.JPG';
import {ProductConsumer, ProductProvider} from '../Context/Context';


export default function About() {
  return (
    <ProductConsumer>
      {value=>{

        const {setClass}=value;

        return(
          <section className="about">
            <div className="container">
              <Title title="About" color={setClass?"#fefefe":"grey"}/>
              <div className="about-center">
                <div className="about-logo">
                  <img src={AboutLogo} alt="logo"/>
                </div>

                <div className={setClass?"about-texts dark-mode-white":"about-texts"}>
                  <div className={setClass?"dark-mode-orange":"profile"}>
                    <h2>My Profile</h2>

                  </div>
                  <div className={setClass?"dark-mode-orange":"profile"}>
                    <p><span>Name: </span>Kareem Draz</p>
                  </div>
                  <div className={setClass?"dark-mode-orange":""}>
                    <p><span>Age: </span>22</p>
                  </div>
                  <div className={setClass?"dark-mode-orange":""}>
                    <p><span>Address: </span>Toronto, Canada</p>
                  </div>
                  <div className={setClass?"dark-mode-orange":""}>
                    <p><span>Email: </span><a href="mailto:draz@ualberta.ca" className={setClass?"dark-mode-mail":""}>draz@ualberta.ca</a></p>
                  </div>
                  <div className="phone">
                    <p><span className={setClass?"dark-mode-orange":""}>Phone: </span>+1 587-974-8805</p>
                  </div>
                  <div className="website">
                    <p><span className={setClass?"dark-mode-orange":""}>Website: </span>www.KareemDraz.com</p>
                  </div>
                  <div className={setClass?"about-media dark-mode-orangeBack":"about-media"}>
                    <a href="www.google.ca" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>

                    <a href="www.google.ca" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>

                    <a href="www.google.ca" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                  </div>

                </div>
              </div>

            <div className={setClass?"dark-mode-lightWhite generally":"generally"}>
              <span className={setClass?"dark-mode-orange":""}> 
                Generally, 
              </span><p className={setClass?"dark-mode-orange":""}>I graduated from the University of Alberta with a Bachelor's degree in Petroleum Engineering. I am an aspiring Data Scientist in the Oil and Gas field. I am also aFull Stack Web Developer. Below you can see my skills and projects.</p>
              <div className="certificates">
                <h4>My Certificates: </h4>
                <p>Bachelors Degree in Petroleum Engineering</p>
                <p>General Assembly Software Engineering Immersive</p>
                <p>Coursera Applied Data Sciences</p>
              </div>
            </div>

            </div>
          </section>
        )
      }}
    </ProductConsumer>
  )
}
