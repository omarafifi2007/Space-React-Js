import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => {
    return (
        <>
            <div className="Div1">
            <div className="NavBar">
            <img src="./logo.svg" alt=""/>
                <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Destination">Destination</Link></li>
                <li><Link to="/Crew">Crew</Link></li>
                </ul>
            </div>
            <div className="Content">
                <div className="Text">
                <h2>So You Want To Travel To <br /> </h2><h1>Space</h1>
                <br />
                <div className="Lo">
                    <h5>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience! Explore</h5>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}
export default Home;
