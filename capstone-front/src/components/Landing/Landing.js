import React from 'react';
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
import Moats from './ProductImages/Moats.jpg';
import Stoat from './ProductImages/Stoat.jpg';
import MediumBoat from './ProductImages/MediumBoat.jpg';
import NewMoat from './ProductImages/NewMoat.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Landing = () => (

<>


<div>
  {/* top row images */}
  {/* links to product category page, will add a href once they have been created^^ */}
  <h2 className='category-text'>CATEGORIES</h2>
  <section className="landing-top-container">
      
      {/* <div className="landing-page-top-row"> */}
      <a href="/productslist"><img className="top-row-img" src={GoatHerd} alt="Goat Category"></img><figcaption>GOATS</figcaption></a>
      <a href="/productslist"><img className="top-row-img" src={BagofOats} alt="Bag of Oats Category"></img><figcaption>OATS</figcaption></a>
      <a href="/productslist"><img className="top-row-img" src={CoatPile} alt="Coats Category"></img><figcaption>COATS</figcaption></a>
      <a href="/productslist"> <img className="top-row-img" src={HatPile} alt="Hat Category"></img><figcaption>HATS</figcaption></a>
      <a href="/productslist"><img className="top-row-img" src={BoatPile} alt="Boat Category"></img><figcaption>BOATS</figcaption></a>
      <a href="/productslist"> <img className="top-row-img" src={Moats} alt="Moats Category"></img><figcaption>MOATS</figcaption></a>
    
    
  </section>
</div>


{/* image carousel */}
<section id="trending-products">
        <div className="landing-page-slide-wrapper">

<Carousel>
  <div>
            <a href="/products/id/1"><img className="animated-img" src={BigHat} alt="pingu hat"/></a>
            {/* <figcaption>Big Boi Hat</figcaption></a> */}

            
            <a href="/products/id/2"><img className="animated-img" src={LittleBoat} alt="LittleBoat"/></a>
            {/* <figcaption>Little Boat</figcaption></a> */}
            
            <a href="/products/id/3"><img className="animated-img" src={BiggerBoat} alt="BiggerBoat"/></a>
            {/* <figcaption>Bigger Boat</figcaption></a> */}
</div>
<div>
            <a href="/products/id/4"><img className="animated-img" src={ThiccOats} alt="ThiccOats"/></a>
            {/* <figcaption>Thicc Oats</figcaption></a> */}
            
            <a href="/products/id/5"><img className="animated-img" src={SpecialGoat} alt="SpecialGoat"/></a>
            {/* <figcaption>Special Goat</figcaption></a> */}

            <a href="/"><img className="animated-img" src={AvocadoHat} alt="Avocado Hat"/></a>
            {/* <figcaption>Avocado Hat</figcaption></a> */}
</div>
<div>
            <a href="/"><img className="animated-img" src={Crown} alt="Crown"/></a>
            {/* on>Crown</figcaption></a> */}
            
            
            <a href="/"><img className="animated-img" src={DinoCoat} alt="Dino Coat"/></a>
            {/* <figcaption>Dino Cat</figcaption></a> */}
            <a href="/"><img className="animated-img" src={WorldCoat} alt="World Coat"/></a>
            {/* <figcaption>World Coat</figcaption></a> */}
            </div>
<div>
            <a href="/"><img className="animated-img" src={FunkyCoat} alt="Funky Coat"/></a>
            {/* <figcaption>Funky Coat Coat</figcaption></a> */}

            <a href="/"><img className="animated-img" src={FrogHat} alt="FrogHat"/></a>
            {/* <figcaption>Frog Bucket Hat</figcaption></a> */}

            <a href="/"><img className="animated-img" src={QuakerOats} alt="QuakerCoat"/></a>
            {/* <figcaption>Quaker Oats</figcaption></a> */}
           
            <a href="/"><img className="animated-img" src={MagicCoat} alt="Magic Coat"/></a>
            {/* <figcaption>Magic Coat</figcaption></a>  */}
            </div>
            </Carousel>     
       </div>
       <h2 className="carousel-text">TRENDING PRODUCTS </h2>  
    </section> <br/>


    <section>
    <div className="bottom-row-container">
    <a href="/"><img className="bottom-row-images"src={Stoat} alt="Stoats"/><figcaption>STOAT STUFF</figcaption></a> 
    <a href="/"><img className="bottom-row-images" src={MediumBoat} alt="Stoats"/><figcaption>BETTER BOATS</figcaption></a> 
    <a href="/"><img className="bottom-row-images" src={NewMoat} alt="Stoats"/><figcaption>MORE MOATS</figcaption></a> 
    </div>
    <h2 className="bottom-row-text">NEW IN</h2>
    </section>
   
    
</>



);

 


export default Landing;
