import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {
     
    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#search">Search</a></li>
	         <li><a className="smoothscroll" href="#view">View</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{"University Finder (GRE)"}</h1>
            <h3>{"This is a web application designed to help students find universities based on their GRE scores. Simply input your GRE scores and the application will search for ideal colleges/universities."}</h3>
            <hr />
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#search"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
