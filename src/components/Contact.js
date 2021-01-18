import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../Context/Context';
import {Link} from 'react-router-dom';
import {scroller} from 'react-scroll';

export default function Contact() {



  const scrollToElement=(element)=>{
    scroller.scrollTo(element, {
      duration:1500,
      delay:100,
      smooth:true,
      offset:-80,
    })
  } 



  return (
    <ProductConsumer>
      {value=>{
        return(
          <React.Fragment>
            <Title title="Contact" color="gray" />
            <div className="contact">
              <div className="container">
                <div className="contact-center">
                  <div className="contact-links">
                    <h3>Links</h3>
                    <div className="links-items">
                      {value.links.map(item=>{
                        return(
                          <li key={item.id}>
                            <Link to="/" onClick={()=>scrollToElement(item.scrolling)} >{item.link}</Link>
                          </li>
                        )
                      })}
                    </div>
                  </div>
                  <div className="contact-media">
                    <h3>Media</h3>
                    <div className="media-items">
                      <li><a href="www.google.ca" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                      <li><a href="www.google.ca" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i> Github</a></li>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </React.Fragment>
        )
      }}
    </ProductConsumer>
  )
}
