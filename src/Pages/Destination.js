import React from 'react';
import {Link} from 'react-router-dom';

const Destination = () => {
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
        <div className="Content1">
          <h5><span className="span1">01</span> Pick Your Destination</h5>
          <div className="Text1">
            <img src="./image-titan.webp" alt="" />
            <div className="NavBar1">
              <ul>
                <li><a href="./index2.html">Moon</a></li>
                <li><a href="./index.html">Mars</a></li>
                <li><a href>Europa</a></li>
                <li><a href>Titan</a></li>
              </ul>
              <div className="Te">
                <h1>MARS</h1>
                <p>Don’t forget to pack your hiking boots. You’ll need them <br /> to tackle Olympus Mons, the tallest planetary mountain in <br /> our solar system. It’s  two and a half times the size of <br /> Everest!</p>
              </div>
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
    );
}
export default Destination;
