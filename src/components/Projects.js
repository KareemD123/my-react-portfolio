// import React from 'react';
// import Title from './Title';
// import {ProductConsumer} from '../Context/Context';
// import wordifyimage from "../images/wordify.JPG"


// export default function Projects() {
//   return (
//     <ProductConsumer>
//       {value=>{

//         const {setClass}=value;
//         return(
//           <div className="projects">
//             <div className="container">
//               <Title title="Projects" color={setClass?"#fefefe":"grey"}/>
//               <div className="projects-center">
//                 {value.projects.map(item=>{
//                   return(
//                     <div className="single-project" key={item.id}>
//                       <a href={item.extlink} target="_blank" rel="noopener noreferrer">
//                         <img src="../logo.svg" alt="img"/></a>
//                       <p>{item.title}</p>
//                       <div className="items"><button className="projectBtn"><a href={item.extlink} target="_blank" rel="noopener noreferrer">{item.btnTitle}</a></button>
//                       </div>
//                       </div>
//                   )
//                 })}
//               </div>
//             </div>
//           </div>
//         )
//       }}
//     </ProductConsumer>
//   )
// }



import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../Context/Context';



export default function Projects() {
  return (
    <ProductConsumer>
      {value=>{

        const {setClass}=value;
        return(
          <div className="projects">
            <div className="container">
              <Title title="Projects" color={setClass?"#fefefe":"grey"}/>
              <div className="projects-center">
                
                  
                    <div className="single-project">
                      <a href="https://github.com/KareemD123/job_tracker_app" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/KareemD123/job_tracker_app/master/athenascreenshot.JPG" alt="img"/></a>
                      <p>Job Tracker App</p>
                      <div className="items"><button className="projectBtn"><a href="https://github.com/KareemD123/job_tracker_app" target="_blank" rel="noopener noreferrer">Python, Django & PostgreSQL</a></button>
                      </div>
                      </div>

                      <div className="single-project">
                      <a href="https://github.com/KareemD123/GoFish_Project_Game/tree/master/GoFish_Project-master" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.git.generalassemb.ly/KareemD123/GoFish_Project/master/gofish.JPG?token=AAAHEO5ZR64NKPD4SOCM7ELAB5TF6" alt="img"/></a>
                      <p>Go Fish Card Game</p>
                      <div className="items"><button className="projectBtn"><a href="https://github.com/KareemD123/GoFish_Project_Game/tree/master/GoFish_Project-master" target="_blank" rel="noopener noreferrer">Javascript, CSS, HTML5</a></button>
                      </div>
                      </div>

                      <div className="single-project">
                      <a href="https://github.com/KareemD123/YuGiOh" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/KareemD123/YuGiOh/master/YuGiOhMainPage.JPG" alt="img"/></a>
                      <p>Yu-Gi-Oh Card Collecting App</p>
                      <div className="items"><button className="projectBtn"><a href="https://github.com/KareemD123/YuGiOh" target="_blank" rel="noopener noreferrer">Javascript, NodeJS, & MongoDB</a></button>
                      </div>
                      </div>

                      <div className="single-project">
                      <a href="https://github.com/KareemD123/wordify" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.imgur.com/h31bQ1C.jpg" alt="img"/></a>
                      <p>Wordify</p>
                      <div className="items"><button className="projectBtn"><a href="https://github.com/KareemD123/wordify" target="_blank" rel="noopener noreferrer">ReactJS & MongoDB</a></button>
                      </div>
                      </div>
                  
                
              </div>
            </div>
          </div>
        )
      }}
    </ProductConsumer>
  )
}