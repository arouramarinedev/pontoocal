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
import Modal from 'react-modal';


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
        backgroundColor: '#D3D3D3',
        color: 'white',
        fontSize: '1.5rem',
        transition: 'background-color 0.3s ease', // Adding transition for smooth effect
    };

       const [isPopupOpen, setPopupOpen] = useState(false);

        const togglePopup = () => {
            setPopupOpen(!isPopupOpen);
        };

     // Custom styles for the modal
      const customStyles = {
        content: {
          width: '800px', // Adjust the width as per your requirements
          height: '600px', // Adjust the height as per your requirements
          margin: 'auto',
          borderRadius: '20px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the overlay background color as per your requirements
        },
      };   
 

    return (
        <>         
          <ScrollToTop color="#ffffff" style={{ position: "fixed", bottom: "300px", left: "1420px", backgroundColor: "#000000", width: "60px",
                height: "60px" }} />
            <div className="container calculator bg-light-subtle">
                <div className="row">
                    <div className="col">
                        <h2 className="text-danger fw-bold mt-3 text-center">Custom Pontoon Protection Kit <br />
                            for New Pontoons up to {Math.round(sqft)} Sq. Ft.</h2>
                    </div>
                </div>
                <div className="row ms-1 ml-2">
                
                      

                    <div className="col ml-5">
                        
                        <h6 className="text-danger fw-bold mt-2 ml-4 ">
                          <button  type="button"
                                className="btn btn-lg  me-4 mt-3 ml-4"
                                onClick={togglePopup}
                                style={buttonStyle}
                                onMouseEnter={(e) => { e.target.style.backgroundColor = '#77ccff'; }}

                                
                              
                                onMouseLeave={(e) => { e.target.style.backgroundColor = '#D3D3D3'; }}>
                                <FaRegDotCircle icon="fa-solid fa-circle-dot" style={{color: "#000000", fontSize:"20px"}} />
                                 &nbsp;&nbsp;&nbsp;Top 10 Benfits of protecting your Pontoons
                            
                            </button>
                        </h6>
                        <Modal isOpen={isPopupOpen} style={customStyles} onRequestClose={togglePopup}>
                            <div className= "border border-primary rounded mt-4 ml-4">
                              <ul className= "sblue" style={{ listStyle: 'none', fontWeight: 'bold', fontSize:"20px" }}>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.&nbsp;The Best time to Protect Your Pontoons against Enviormental Damage &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(stains, Tarnish, Etching, Pitting, Corrosion, Oxidation), is when they are Bran &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new, before you lanch your boat. You'll save the time and cost of restoring &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;them later.</span> </li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.&nbsp;Pontoons</span> Stay Clean and Shiny Year After Year</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.&nbsp;Pride</span> of Ownership. Your Boat is a Reflection of Your Personality.</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.&nbsp;Greater</span> Trade or Resale Value. Adding $5,000 to $10,000 is Common.</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.&nbsp;Better</span> Fuel Economy. Reduce Fuel Consumption Up to 20%.</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6.&nbsp;Easier</span> Maintenance. Pontoons Can Stay Fouling Free All Summer.</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.&nbsp;Make</span> .your boat Sal Water REady. ALUMETRON and VS712 prevents &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chloride ion Pitting Corrosion from salt.</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.&nbsp;ALUMETRON</span> and VS712 can last up to 10 years, even in constant water &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;immersion. Save Money by Reducing Costly Annual Maintenance.</li>
                                <li><span className="ms-1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.&nbsp;Get</span> a 3 Year Transferable Factory Warranty.</li>

                              </ul>
                            </div>
                            <button onClick={togglePopup}style={{
                                            display: 'block',
                                            width: '150px',
                                            height: '40px',
                                            margin: '20px auto', // Adds spacing between the button and content
                                            backgroundColor: 'red',
                                            color: 'white',
                                            fontSize: '20px',
                                            borderRadius: '10px',
                                          }}>Close Pop-up</button>
                          </Modal> 
                         
                    </div>
                    <h7 className="text-danger fw-bold mt-42">
                           
                           <button type="button" 
                                
                                className="btn btn-lg me-4 mt-3"
                                onClick={handleClick}
                                style={buttonStyle}
                                onMouseEnter={(e) => { e.target.style.backgroundColor = '#77ccff'; }}
                                onMouseLeave={(e) => { e.target.style.backgroundColor = '#D3D3D3'; }}>
                                <FaYoutube icon="fa-brands fa-youtube"  
                                style={{color: "#000000", fontSize: "33px"}} />
                                &nbsp;&nbsp;&nbsp;How To YouTube Video?
                            
                        

                          </button>
                    </h7>

                    <h8 className="text-danger fw-bold mt-2">
                            <button  type="button"
                                className="btn btn-lg me-4 mt-3"
                                onClick={scrollToBottom}
                                style={buttonStyle}
                                onMouseEnter={(e) => { e.target.style.backgroundColor = '#77ccff'; }}
                                onMouseLeave={(e) => { e.target.style.backgroundColor = '#D3D3D3'; }}>
                           <FaRegDotCircle icon="fa-solid fa-circle-dot" style={{color: "#000000", fontSize:"20px"}} />
                            &nbsp;&nbsp;&nbsp;Dealer Applied VS DIY Comparison
                           
                          </button>
                    </h8>
                                  
                                            
                    
                </div>
                <div className="mt-5">
                    <Products />
                    <Buttons />
                </div>
                
                <section  id="my-section">
                    <HowTo />
                </section>    
                <CostComparison />
                <div style={{ marginBottom: '50px' }}>
                    <p>&nbsp;</p>
                </div> 

            </div>
             <div style={{ marginBottom: '50px' }}>
                    <p>&nbsp;</p>
                </div> 
            
        </>
    )
}
 
          


export default Landing

     
