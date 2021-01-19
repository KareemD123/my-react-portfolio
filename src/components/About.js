import React from 'react';
import Title from './Title';
import AboutLogo from '../images/profilePhoto.png';
import {ProductConsumer, ProductProvider} from '../Context/Context';


export default function About() {
  return (
    <ProductConsumer>
      {value=>{

        const {setClass}=value;

        return(
          <section className="about">

                {/* <h1>  
                Welcome,
                </h1>
                <h2>
                Petroleum Engineer, Full-Stack Web Developer, and aspiring Data Scientist
                </h2>
                <a href="mailto:draz@ualberta.ca" className="contactBtn">Contact</a> */}


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
                    <a href="https://github.com/KareemD123" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>

                    <a href="http://www.linkedin.com/in/kareem-draz" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                  </div>

                </div>
              </div>

            <div className={setClass?"dark-mode-lightWhite generally":"generally"}>
              <span className={setClass?"dark-mode-orange":""}> 
                About me, 
              </span><p className={setClass?"dark-mode-orange":""}>I graduated from the University of Alberta with a Bachelor's degree in Petroleum Engineering. While working on my skills, I developed a passion for programming. I am an aspiring Web Developer and Data Scientist in the Oil and Gas field. Check out some of my projects and skills below!</p>
              <div className="certificates">
                <h4>My Qualifications: </h4>
                <p>Bachelors Degree in Petroleum Engineering</p>
                <p>General Assembly Software Engineering Immersive</p>
                <p>Coursera Applied Data Science (In progress)</p>
              </div>
            </div>

            </div>
          </section>
        )
      }}
    </ProductConsumer>
  )
}
