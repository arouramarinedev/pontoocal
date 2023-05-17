import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux'
import CostComparison from './CostComparison'
import HowTo from './HowTo'
import { DATA200, DATA200T, NDATA200, NDATA200T } from '../../Data';
import Products from './Products';
import Buttons from './Buttons';
import ScrollDownButton from './ScrollDownButton';
import ScrollToTop from "react-scroll-to-top";
import { FaYoutube,FaCircle, FaRegDotCircle} from 'react-icons/fa';
import handleClick from './ScrollDown';



function Landing() {
    const [isOpen, setIsOpen] = useState(false);
    
    function BenefitsDropdown() {
        const [isOpen, setIsOpen] = useState(false);
    }    

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    const sqft = useSelector((state) => state.squareft.value);
    const condition = useSelector((state) => state.conditioner.value);

    // console.log(condition);

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      };

       const HowToRef = useRef(null);

  function scrollToHowTo() {
        HowToRef.current.scrollIntoView({ behavior: 'smooth' });

    }
    const handleClick = () => {
      const section = document.getElementById("my-section");
      section.scrollIntoView({ behavior: "smooth" });
    };

    const buttonStyle = {
        backgroundColor: 'gray',
        color: 'white',
        fontSize: '1.5rem',
        transition: 'background-color 0.3s ease', // Adding transition for smooth effect
    };

 

    return (
        <>         
          <ScrollToTop color="#000000" style={{ position: "fixed", bottom: "20px", left: "1420px" }} />
            <div className="container calculator bg-light-subtle">
                <div className="row">
                    <div className="col">
                        <h2 className="text-danger fw-bold mt-3 text-center">Custom Pontoon Protection Kit <br />
                            for New Pontoons up to {Math.round(sqft)} Sq. Ft.</h2>
                    </div>
                </div>
                <div className="row ms-1">

                    <div className="col">
                        
                        <h6 className="text-danger fw-bold mt-2">
                          <button  type="button"
                                className="btn btn-lg btn-success me-4 mt-3"
                                onClick={toggleDropdown}
                                style={buttonStyle}
                                onMouseEnter={(e) => { e.target.style.backgroundColor = 'darkgray'; }}
                                onMouseLeave={(e) => { e.target.style.backgroundColor = 'gray'; }}>
                                <FaRegDotCircle icon="fa-solid fa-circle-dot" style={{color: "#000000", fontSize:"20px"}} />
                                 &nbsp;&nbsp;&nbsp;Top 10 Benfits of protecting your Pontoons
                            
                            </button>
                        </h6>
                        {isOpen && (
                            <div className= "border border-primary rounded mt-4">
                              <ul className= "sblue" style={{ listStyle: 'none' }}>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.Pontoons</span> Stay Clean and Shiny Year After Year</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.Pride</span> of Ownership. Your Boat is a Reflection of Your Personality.</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.Three Year</span> Transferable Factory Warranty.</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.Greater</span> Trade or Resale Value. Adding $5,000 to $10,000 is Common.</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.Better</span> Fuel Economy. Reduce Fuel Consumption Up to 20%.</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.Easier</span> Maintenance. Pontoons Can Stay Fouling Free All Summer.</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7.Lasts</span> up to 10 Years. Save Money by Reducing Costly Annual Maintenance.</li>
                              </ul>
                            </div>
                        )}  
                    </div>
                    <h7 className="text-danger fw-bold mt-42">
                           
                           <button type="button" className="btn btn-lg btn-success me-4 mt-3"   onClick={handleClick} style={{ fontSize: "1.5rem" }}>
                            <FaYoutube icon="fa-brands fa-youtube"  style={{color: "#000000", fontSize: "33px"}} />
                            &nbsp;&nbsp;&nbsp;How To YouTube Video?
                            
                        

                          </button>
                    </h7>

                    <h8 className="text-danger fw-bold mt-2">
                           <button type="button" className="btn btn-lg btn-success me-4 mt-3" onClick={scrollToBottom}  style={{ fontSize: "1.5rem" }}>
                           <FaRegDotCircle icon="fa-solid fa-circle-dot" style={{color: "#000000", fontSize:"20px"}} />
                            &nbsp;&nbsp;&nbsp;Dealer Applied VS DIY Comparison
                           
                          </button>
                    </h8>
                                  
                                            
                    
                </div>
                <div className="mt-5">
                    <Products />
                    <Buttons />
                </div>
                <div className="text-end d-flex align-items-center justify-content-end" onClick={scrollToBottom} >
                     <button type="button" className="btn btn-lg btn-success me-4 mt-3">
                        <i className="cursor-pointer bi bi-arrow-down-circle-fill fs-4 me-2"></i>
                        <span className="fs-5 me-3 cursor-pointer">Scroll Down</span>
                    </button>

                    </div>
                <section id="my-section">
                    <HowTo />
                </section>    
                <CostComparison />
            </div>
        </>
    )
}
 
          


export default Landing

     
