import React from 'react';
import {Link} from 'react-router-dom';


const Crew = () => {
    return (
        <>
            <div className="Div1">
            <div className="NavBar">
                <img src="./logo.svg" alt="" />
                <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Destination">Destination</Link></li>
                <li><Link to="/Crew">Crew</Link></li>
                </ul>
            </div>
            <h5 className="H5"><span className="span1">02</span> Meet Your Crew</h5>
            <div className="Content3">
                <div className="Text3">
                <h1>Flight Engineer</h1>
                <h2>Anousheh Ansari</h2>
                <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
                </div>
                <img src="./image-anousheh-ansari.png" alt="" />
            </div>
            </div>
        </>
    );
}
export default Crew;
