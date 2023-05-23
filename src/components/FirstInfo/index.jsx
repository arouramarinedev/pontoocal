import bill1 from '../../img/pontoon-calculator/bill1.jpg';
import bill2 from '../../img/pontoon-calculator/bill2.jpg';
import oldImg from '../../img/before-un.jpg';
import oldImg2 from '../../img/before-un-2.jpg';


import React from 'react'
import StepOne from '../StepOne';
import Popup from './Popup';

function New() {
    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 border rounded-4 border-dark-subtle bg-white pt-2 mb-3">
                        <h4 className="fw-bold sblue"><em>
                            Protect the Factory Finish on your Pontoons for up to 10 years
                        </em>
                        </h4>
                        <h5 className="text-danger fw-bold fs-3"><em><span className="mx-1">✓ </span>Get a 3 Year Factory Warranty!</em></h5>
                        <div className="row mt-2">
                            <div className="col">
                                <p className="sblue"><span className="text-danger"><b><em>Protected</em></b></span>
                                    <span><br />New Pontoons protected with <b>Alumetron</b> and <b>VS721</b></span>
                                </p>
                                <div className="row">
                                   <div
                                          className="col-5 col-sm-5 col-md-5 col-lg-5"
                                          style={{
                                            position: 'relative',
                                            backgroundColor: 'transparent',
                                            transition: 'background-color 0.3s',
                                          }}
                                          onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.3)')}
                                          onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
                                        >
                                          <Popup
                                            imagelink={bill1}
                                            alttext="new pontoon boat protected with Alumetron"
                                            mtarget="#exampleModal1"
                                            mid="exampleModal1"
                                          />
                                          <p className="text-center sblue">Click to enlarge</p>
                                    </div>
                                    <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                                        <Popup 
                                            imagelink = {bill2}
                                            alttext = "new pontoon boat protected with Alumetron"
                                            mtarget = "#exampleModal2"
                                            mid = "exampleModal2"
                                        />
                                        {/* <a href={newImg2} rel="noreferrer" target="_blank"><img className="img-fluid" src={newImg2} alt="new pontoon boat protected with Alumetron" width={260} /></a> */}
                                        <p className="text-center sblue">Click to enlarge</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p className="sblue"><span className="text-danger"><em><b>Unprotected</b></em></span>
                                    <span><br />Pontoons after 1 season in a fresh water lake</span>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                            <Popup 
                                            imagelink = {oldImg}
                                            alttext = "Unpontoon boat protected with Alumetron"
                                            mtarget = "#exampleModal3"
                                            mid = "exampleModal3"
                                        />
                                {/* <a href={oldImg} rel="noreferrer" target="_blank"><img className="img-fluid" src={oldImg} alt="Unpontoon boat protected with Alumetron" width={260} /></a> */}
                                <p className="text-center sblue">Click to enlarge</p>
                            </div>
                            <div className="col-5 col-sm-5 col-md-5 col-lg-5">
                            <Popup 
                                            imagelink = {oldImg2}
                                            alttext = "Unpontoon boat protected with Alumetron"
                                            mtarget = "#exampleModal4"
                                            mid = "exampleModal4"
                                        />
                                {/* <a href={oldImg2} rel="noreferrer" target="_blank"><img className="img-fluid" src={oldImg2} alt="Unpontoon boat protected with Alumetron" width={260} /></a> */}
                                <p className="text-center sblue">Click to enlarge</p>
                            </div>
                        </div>
                        <div className="row mt-0">
                            <div className="col">
                                <p className="sblue">The Best Time to Protect your Aluminum Pontoons is when your boat is Brand New; before it goes in the water. It’s easier, faster and less expensive than cleaning and restoring the finish after the fact. </p>
                                <p className="sblue">Ask your Boat Dealer to apply <b><a rel="noreferrer" target="_blank" href="https://auroramarine.com/alumetron.html">ALUMETRON</a></b> and
                                    <b><a rel="noreferrer" target="_blank" href="https://auroramarine.com/vs721-bottom-coat.html"> VS721</a></b> or Do It Yourself and Save. We’ll show you how.
                                </p>
                                <p className="sblue">If you allow the pontoons to become stained, fouled and etched, it will make your boat look crappy and devalue your boating investment by many thousands of dollars.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6" >
                            
                          
                        
                        <div className="border rounded-4 border-dark-subtle bg-white pt-2 ps-1" >
                            <div className="row" >
                                <div className="col">
                                      
                                        <span class=" sblue fs-2 fw-bold text-center d-flex align-items-center justify-content-center"  style={{ marginBottom: '40px'}}  >New Pontoon Boat <br /> Step by Step Calculator</span>
                                      <div style={{ marginLeft: '20px' }}>  
                                        <p className="fw-bold text-danger"  style={{fontSize: '20px', marginBottom: '10px'}}><em>Easy to Use!<br/> Step by Step, Automatic Calculator:</em></p>
                                      </div>  
                                
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <ul className="sblue" style={{ fontSize: '18px' }}>
                                        <li>Calculates the Sq. Ft. of Your Pontoons</li>
                                        <li>Determines the Products You Need</li>
                                        <li>Gives You a Quote</li>
                                        <li>3 Year Factory Warranty</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <StepOne />
                         <div style={{ marginBottom: '50px' }}>
                            <p>&nbsp;</p>
                        </div> 
                    </div>
                </div>
            </div >


        </>
    )
}

export default New