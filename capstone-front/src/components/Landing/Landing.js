import React from 'react';
import PropTypes from 'prop-types';
import './Landing.css';
import BigHat from'./ProductImages/BigBoiHat.jpg';

const Landing = () => (
  <section>
{/* first image grid */}
   <div className="Landing">
   Landing Component
 </div>
{/* image carousel  */}
  
  

{/* images container */}

<div class="product-images-carousel">
    <div class="main-carousel">1 / 3</div>
    <img src={BigHat} alt='pingu hat'></img>
    <div class="text">Big Boi Hat</div>
  </div>




{/* second image grid */}
<div className="Landing">
  Landing Component
</div>
  </section> 
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
