import React from 'react';
// import PropTypes from 'prop-types';
import './Landing.css';
import BigHat from'./ProductImages/PingHat.jpg';
import LittleBoat from'./ProductImages/LittleBoat.jpg';
import BiggerBoat from './ProductImages/BigBoat.jpg';
import ThiccOats from './ProductImages/ThickOats.jpg';
import SpecialGoat from './ProductImages/SpecialGoat.jpg';
import AvocadoHat from './ProductImages/AvocadoHat.jpg';
import BapeCoat from './ProductImages/BapeCoat.jpg';
import Crown from './ProductImages/Crown.jpg';
import DinoCoat from './ProductImages/DinoCoat.jpg';
import WorldCoat from './ProductImages/WorldCoat.jpg';
import FrogHat from './ProductImages/FrogHat.jpg';
import FunkyCoat from './ProductImages/FunkyCoat.jpg';
import MagicCoat from './ProductImages/MagicCoat.jpg';
import QuakerOats from './ProductImages/QuakerOats.jpg';


const Landing = () => (
<>
<div>
  <section className="landing-top-images">

    <h2>Hola</h2>
  </section>
</div>
<section id="trending-products">
        <p><strong> Check out our TRENDING PRODUCTS </strong></p>
        <div class="landing-page-slide-wrapper">
            <a href="/"><img class="animated-img" src={BigHat} alt="pingu hat"/><figcaption>Big Hat</figcaption></a>
            <a href="/"><img class="animated-img" src={LittleBoat} alt="LittleBoat"/><figcaption>Little Boat</figcaption></a>
            <a href="/"><img class="animated-img" src={BiggerBoat} alt="BiggerBoat"/><figcaption>Bigger Boat</figcaption></a>
            <a href="/"><img class="animated-img" src={ThiccOats} alt="ThiccOats"/><figcaption>Thic Oats</figcaption></a>
            <a href="/"><img class="animated-img" src={SpecialGoat} alt="SpecialGoat"/><figcaption>Special Goat</figcaption></a>
            <a href="/"><img class="animated-img" src={AvocadoHat} alt="Avocado Hat"/><figcaption>Avocado Hat</figcaption></a>
            <a href="/"><img class="animated-img" src={BapeCoat} alt="Bape Coat"/><figcaption>Bape Coat</figcaption></a>
            <a href="/"><img class="animated-img" src={Crown} alt="Crown"/><figcaption>Crown</figcaption></a>
            <a href="/"><img class="animated-img" src={DinoCoat} alt="Dino Coat"/><figcaption>Dino Cat</figcaption></a>
            <a href="/"><img class="animated-img" src={WorldCoat} alt="World Coat"/><figcaption>World Coat</figcaption></a>
            <a href="/"><img class="animated-img" src={FunkyCoat} alt="Funky Coat"/><figcaption>Funky Coat Coat</figcaption></a>
            <a href="/"><img class="animated-img" src={FrogHat} alt="FrogHat"/><figcaption>Frog Bucket Hat</figcaption></a>
            <a href="/"><img class="animated-img" src={QuakerOats} alt="QuakerCoat"/><figcaption>Quaker Oats</figcaption></a>
            <a href="/"><img class="animated-img" src={MagicCoat} alt="Magic Coat"/><figcaption>Magic Coat</figcaption></a>            <a href="/"><img class="animated-img" src={WorldCoat} alt="World Coat"/><figcaption>World Coat</figcaption></a>
       </div>
    </section>

</>
);




 


export default Landing;
