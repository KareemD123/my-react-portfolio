
import React, {Component} from 'react';
import {Links} from './Data';
import {devSkills} from './Data';
import {petroleumSkills} from './Data';
import {projects} from './Data';
import {courses} from './Data';



const ProductContext = React.createContext();

class ProductProvider extends Component {


      state={
        // sidebarOpen:false,
        // closeLinks:false,
        links:Links,
        // headerShow:false,
        devSkills:devSkills,
        petroleumSkills:petroleumSkills,
        projects:projects,
        courses:courses,
        // backMode:false,
        // setClass:JSON.parse(localStorage.getItem("Mode"))
      }
  render() {
    return(
      <ProductContext.Provider value={{
        
          ...this.state,
          

      }}>
        {this.props.children}

      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};