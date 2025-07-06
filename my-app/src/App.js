import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import { useState } from 'react';
import Slider from "react-slick";

// Header  
const Header = () => {
  return (
    <header className="rectangle-header">
    </header> 
  );
};

// This is the logo and the Intro Module 

const Rectangle = () => {
  return (
    <div className="rectangle">
      <img src='/Logo/e.png' className="logo" alt="Xenopent Logo" />'
      <div className='rectangle-text'>
        <h2 className='t1'>Xenopent</h2>
        <line className='t2'>Mastering the art of securing Cyberspace</line>
        <p className='t3'>The Company is Build Upon Solid Cybersecurity Ethusiast who are keen to Solve your problem and Even Wish you had problem in the first place to solve and satisfy their thirst upon the problem origined or maybe they would cause the problem and solve it to prove their innoncence </p>
      </div>
    </div>
  );
};

/* This the Service Module*/

const Rectangle2 = () => {
  const services = [
    {
      title: "Web-Application",
      description: "Identify vulnerabilities before hackers do with our comprehensive security assessments."
    },
    {
      title: "Networks",
      description: "Get expert advice to strengthen your organization's security posture."
    },
    {
      title: "Social Engineering",
      description: "24/7 support to detect, respond to, and recover from security breaches."
    }
  ];

  return (
    <div className='Service'>
      <h2>Services</h2>
      <div className='flexcard'>
        <div className='container'>
          {services.map((service, index) => (
            <div key={index} className={`card card-${index + 1}`}>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* This the Review Module*/

const Rectangle3 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const data = [
    {
      Name:`Abishek`,
      Review:`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.`
    },
    {
      Name:`Afreethi`,
      Review:`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.`
    },
    {
      Name:`Deepika`,
      Review:`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.`
    },
    {
      Name:`Vijay`,
      Review:`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.`
    },
    {
      Name:`Deepak`,
      Review:`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.`
    },
    {
      Name:`Harish Anand`,
      Review:`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.`
    },
    {
      Name:`Sarathi`,
      Review:`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.`
    },
    {
      Name:`Mano Ranjithaa`,
      Review:`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.`
    },
  ];

  return (
    <div className='reviews'>
      <h2>Reviews</h2>
      <div className='reviewbox'>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="review-slide">
              <div className="review-card">
                <h3 className="review-name">{d.Name}</h3>
                <p className="review-text">{d.Review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

//Queries Module

const Rectangle4 = () => {
  return (
    <div className='Queries'>
      
    </div>
  )
}

// Main App component
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Rectangle />
        <Rectangle2 />
        <Rectangle3 />
      </header>
    </div>
  );
}


export default App;