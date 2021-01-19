import React from 'react'
import Title from './Title';
import {ProductConsumer} from '../Context/Context';

export default function Skills() {
  return (
    <ProductConsumer>
      {value=>{

        const {setClass}=value;

        return(
          <div className="skillsContainer">
          <div className="skills">
            <div className="container">
              <div className="skillsTitle">
              <Title title="Skills" color={setClass?"#fefefe":"grey"}/>
              </div>
              <div className="skills-center">
                <div className="skills-web">
                <h4 className={setClass?"dark-mode-orange":""}>Web Development & Software</h4>
                {value.devSkills.map(devskills=>{
                  return(
                    <li className={setClass?"dark-mode-lightWhite":""}>
                      <h3>{devskills.title}</h3>
                    </li>
                  )
                })}
                </div>

                <div className="skills-petroleum">
                <h4 className={setClass?"dark-mode-orange":""}>Petroleum Engineering</h4>
                {value.petroleumSkills.map(skills=>{
                  return(
                    <li className={setClass?"dark-mode-lightWhite":""}>
                      <h3>{skills.title}</h3>
                    </li>
                  )
                })}
                </div>

                <div className="skills-datascience">
                <h4 className={setClass?"dark-mode-orange":""}>Data Science</h4>
                {value.datascienceSkills.map(skills=>{
                  return(
                    <li className={setClass?"dark-mode-lightWhite":""}>
                      <h3>{skills.title}</h3>
                    </li>
                  )
                })}
                </div>


              </div>
            </div>
          </div></div>
        )
      }}
    </ProductConsumer>
  )
  
}
