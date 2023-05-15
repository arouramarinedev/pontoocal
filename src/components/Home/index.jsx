import New from '../FirstInfo';
import Head from '../Head';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import trioon from '../../img/trioon.png';
// import { newLocation } from "../../redux/location";

function Home() {
    const length = useSelector((state) => state.length.value);
    // const location = useSelector((state) => state.locationer.value);

    const dispatch = useDispatch();


    return (
        <>
            <div className="calculator container bg-light-subtle" >
                {/* <Head /> */}
                

                    <div className="row align-items-center">
                      <div className="col">
                        <Head />
                      </div>
                      <div className="col text-center" style={{position: "relative"}}>
                        <div style={{position: "absolute", top: "-40px", left: "50%", transform: "translateX(-50%)", zIndex: "1"}}>
                          <img src={trioon} style={{ width: "250px", height: "113px"}}/> 
                        </div>
                      </div>
                    </div>
                {/* <FirstInfo />
                <StepOne /> */}
                <New />
            </div>

        </>
    );
}

export default Home;