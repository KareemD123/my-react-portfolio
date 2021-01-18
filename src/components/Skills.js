import React from 'react'
import Title from './Title';
import {ProductConsumer} from '../Context/Context';

export default function Skills() {
  return (
    <ProductConsumer>
      {value=>{
        return(
          <div className="skills">
            <div className="container">
              <Title title="Skills" color="grey"/>
              <div className="skills-center">
                <div className="skills-web">
                <h4>Web Development Skills</h4>
                {value.devSkills.map(devskills=>{
                  return(
                    <li>
                      <h3>{devskills.title}</h3>
                    </li>
                  )
                })}
                </div>

                <div className="skills-petroleum">
                <h4>Petroleum Skills</h4>
                {value.petroleumSkills.map(skills=>{
                  return(
                    <li>
                      <h3>{skills.title}</h3>
                    </li>
                  )
                })}
                </div>


              </div>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
  )
}
