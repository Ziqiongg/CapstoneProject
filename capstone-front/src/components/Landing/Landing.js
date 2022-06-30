import React from 'react';
// import PropTypes from 'prop-types';
import './Landing.css';
import BigHat from'./ProductImages/PingHat.jpg';
import LittleBoat from'./ProductImages/LittleBoat.jpg';
import BiggerBoat from './ProductImages/BigBoat.jpg';
import ThiccOats from './ProductImages/ThickOats.jpg';
import SpecialGoat from './ProductImages/SpecialGoat.jpg';
import AvocadoHat from './ProductImages/AvocadoHat.jpg';
import Crown from './ProductImages/Crown.jpg';
import DinoCoat from './ProductImages/DinoCoat.jpg';
import WorldCoat from './ProductImages/WorldCoat.jpg';
import FrogHat from './ProductImages/FrogHat.jpg';
import FunkyCoat from './ProductImages/FunkyCoat.jpg';
import MagicCoat from './ProductImages/MagicCoat.jpg';
import QuakerOats from './ProductImages/QuakerOats.jpg';
import GoatHerd from './ProductImages/GoatHerd.jpg';
import BagofOats from './ProductImages/BagOfOats.jpg';
import CoatPile from './ProductImages/CoatPile.jpg';
import HatPile from './ProductImages/PileOfHats.jpg';
import BoatPile from './ProductImages/BoatPile.jpg';
// import StoatsPile from './ProductImages/StoatPile.jpg';
import Moats from './ProductImages/Moats.jpg';


const Landing = () => (

<>
<div>
  {/* top row images */}
  {/* links to product category page(?), will add a href once they have been created^^ */}
  <section className="landing-top-container">
    <div className="landing-page-top-row">
      <h1>Check Out Our Product Categories</h1>
        <img src={GoatHerd} alt="Goat Category"></img>
        <img src={BagofOats} alt="Bag of Oats Category"></img>
        <img src={CoatPile} alt="Coats Category"></img>
        <img src={HatPile} alt="Hat Category"></img>
        <img src={BoatPile} alt="Boat Category"></img>
        <img src={Moats} alt="Moats Category"></img>

    </div>
    
  </section>
</div>

{/* image carousel thing */}
{/* need to add links to the product pages when theyre complete */}
<section id="trending-products">
        
        <div className="landing-page-slide-wrapper">
            <a href="/"><img className="animated-img" src={BigHat} alt="pingu hat"/><figcaption>Big Boi Hat</figcaption></a>
            <a href="/"><img className="animated-img" src={LittleBoat} alt="LittleBoat"/><figcaption>Little Boat</figcaption></a>
            <a href="/"><img className="animated-img" src={BiggerBoat} alt="BiggerBoat"/><figcaption>Bigger Boat</figcaption></a>
            <a href="/"><img className="animated-img" src={ThiccOats} alt="ThiccOats"/><figcaption>Thicc Oats</figcaption></a>
            <a href="/"><img className="animated-img" src={SpecialGoat} alt="SpecialGoat"/><figcaption>Special Goat</figcaption></a>
            <a href="/"><img className="animated-img" src={AvocadoHat} alt="Avocado Hat"/><figcaption>Avocado Hat</figcaption></a>
            <a href="/"><img className="animated-img" src={Crown} alt="Crown"/><figcaption>Crown</figcaption></a>
            <a href="/"><img className="animated-img" src={DinoCoat} alt="Dino Coat"/><figcaption>Dino Cat</figcaption></a>
            <a href="/"><img className="animated-img" src={WorldCoat} alt="World Coat"/><figcaption>World Coat</figcaption></a>
            <a href="/"><img className="animated-img" src={FunkyCoat} alt="Funky Coat"/><figcaption>Funky Coat Coat</figcaption></a>
            <a href="/"><img className="animated-img" src={FrogHat} alt="FrogHat"/><figcaption>Frog Bucket Hat</figcaption></a>
            <a href="/"><img className="animated-img" src={QuakerOats} alt="QuakerCoat"/><figcaption>Quaker Oats</figcaption></a>
            <a href="/"><img className="animated-img" src={MagicCoat} alt="Magic Coat"/><figcaption>Magic Coat</figcaption></a> 
            <p><strong> WHAT PEOPLE ARE LOVING: TRENDING PRODUCTS </strong></p>           
       </div>
    </section>

    <div className="bottom-row-container">
 <h1>THIRD GRID CONTAINER</h1>

  
    </div>

</>



);

 


export default Landing;
