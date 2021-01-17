import React from 'react';
import Title from './Title';
import AboutLogo from '../images/wordify.JPG';
import {ProductConsumer, ProductProvider} from '../Context/Context';


export default function About() {
  return (
    <ProductConsumer>
      {value=>{
        return(
          <section className="about">
            <div className="container">
              <Title title="About" color="grey"/>
              <div className="about-center">
                <div className="about-logo">
                  <img src={AboutLogo} alt="logo"/>
                </div>
                <div className="about-texts">
                  <div className="profile">
                    <h2>My Profile</h2>

                  </div>
                  <div className="name">
                    <p><span>Name: </span>Kareem Draz</p>
                  </div>
                  <div className="age">
                    <p><span>Age: </span>22</p>
                  </div>
                  <div className="address">
                    <p><span>Address: </span>Toronto, Canada</p>
                  </div>
                  <div className="email">
                    <p><span>Email: </span><a href="mailto:draz@ualberta.ca">draz@ualberta.ca</a></p>
                  </div>
                  <div className="phone">
                    <p><span>Phone: </span>+1 587-974-8805</p>
                  </div>
                  <div className="website">
                    <p><span>Website: </span>www.KareemDraz.com</p>
                  </div>
                  <div className="about-media">
                    <a href="www.google.ca" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>

                    <a href="www.google.ca" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>

                    <a href="www.google.ca" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                  </div>

                </div>
              </div>
            </div>
          </section>
        )
      }}
    </ProductConsumer>
  )
}
