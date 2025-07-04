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

  const[isOpen, setIsOpen] = useState(false);



  return (
    <div className='Service'>
        <div className='flexcard'>
          <div className='container'>
            <motion.div onClick={() => setIsOpen(isOpen)} className='it1'>
              <motion.h2>Web-Application</motion.h2>
              <motion.div>
                <p>Our cutting-edge website offers professional web application vulnerability testing to help businesses 
                  identify and fix security flaws before hackers exploit them. Using advanced scanning tools and expert manual 
                  analysis, we thoroughly assess your web apps for common vulnerabilities like SQL injection, cross-site scripting (XSS), 
                  and insecure authentication. Our detailed reports provide actionable insights to strengthen your security posture, 
                  ensuring compliance with industry standards like OWASP and GDPR. Don’t wait for a breach—protect your digital assets 
                  with our reliable, affordable, and comprehensive vulnerability testing services today!
                </p>
              </motion.div>
            </motion.div>
            <div className='it2'></div>
            <div className='it3'></div>
          </div>
        </div>
        <h2>Services</h2>
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
      </header>
    </div>
  );
}


export default App;