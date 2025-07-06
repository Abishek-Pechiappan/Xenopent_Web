import { useState } from 'react';
import './App.css';
import {motion} from 'framer-motion';

// Header component
const Header = () => {
  return (
    <header className="rectangle-header">
    </header> 
  );
};

const Rectangle = () => {
  return (
    <div className="rectangle">
      <img src='e.png' className="logo" alt="Xenopent Logo" />'
      <div className='rectangle-text'>
        <h2 className='t1'>Xenopent</h2>
        <line className='t2'>Mastering the art of securing Cyberspace</line>
        <p className='t3'>The Company is Build Upon Solid Cybersecurity Ethusiast who are keen to Solve your problem and Even Wish you had problem in the first place to solve and satisfy their thirst upon the problem origined or maybe they would cause the problem and solve it to prove their innoncence </p>
      </div>
    </div>
  );
};

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

const Rectagnle3 = () => {
  return (
    <div className='Reviews'>
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
        <Rectagnle3 />
      </header>
    </div>
  );
}


export default App;