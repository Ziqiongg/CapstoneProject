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
import Moats from './ProductImages/Moats.jpg';
import Stoat from './ProductImages/Stoat.jpg';
import MediumBoat from './ProductImages/MediumBoat.jpg';
import NewMoat from './ProductImages/NewMoat.jpg';
import BoatPage from '../BoatsCategoryPage/Boats';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Landing = () => (

<>


<div>
<section className="empty-container">
  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h2>
</section>
  {/* top row images */}
  {/* links to product category page, will add a href once they have been created^^ */}
  <h2 className='category-text'>CATEGORIES</h2>
  <section className="landing-top-container">
      
      {/* <div className="landing-page-top-row"> */}
      <a href="https://www.buttercups.org.uk/adoption.htm"><img className="top-row-img" src={GoatHerd} alt="Goat Category"></img><figcaption>GOATS</figcaption></a>
      <a href="/Oats"><img className="top-row-img" src={BagofOats} alt="Bag of Oats Category"></img><figcaption>OATS</figcaption></a>
      <a href="/Coats"><img className="top-row-img" src={CoatPile} alt="Coats Category"></img><figcaption>COATS</figcaption></a>
      <a href="/Hats"> <img className="top-row-img" src={HatPile} alt="Hat Category"></img><figcaption>HATS</figcaption></a>
      <a href="/Boats"><img className="top-row-img" src={BoatPile} alt="Boat Category"></img><figcaption>BOATS</figcaption></a>
      <a href="/Moats"> <img className="top-row-img" src={Moats} alt="Moats Category"></img><figcaption>MOATS</figcaption></a>
    
    
  </section>
</div>

{/* Empty coontainer */}

<section className="empty-container">
  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h2>
</section>

{/* image carousel */}
{/* need to add links to the product pages when theyre complete */}
<section id="trending-products">
        <div className="landing-page-slide-wrapper">

<Carousel>
  <div>
            <a href="/"><img className="animated-img" src={BigHat} alt="pingu hat"/></a>
            {/* <figcaption>Big Boi Hat</figcaption></a> */}

            
            <a href="/"><img className="animated-img" src={LittleBoat} alt="LittleBoat"/></a>
            {/* <figcaption>Little Boat</figcaption></a> */}
            
            <a href="/"><img className="animated-img" src={BiggerBoat} alt="BiggerBoat"/></a>
            {/* <figcaption>Bigger Boat</figcaption></a> */}
</div>
<div>
            <a href="/"><img className="animated-img" src={ThiccOats} alt="ThiccOats"/></a>
            {/* <figcaption>Thicc Oats</figcaption></a> */}
            
            <a href="/"><img className="animated-img" src={SpecialGoat} alt="SpecialGoat"/></a>
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

    <section className="empty-container">
  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt"</h2>
</section>

    <section>
    <div className="bottom-row-container">
    <a href="/"><img className="bottom-row-images"src={Stoat} alt="Stoats"/><figcaption>Stoat Stuff</figcaption></a> 
    <a href="/"><img className="bottom-row-images" src={MediumBoat} alt="Stoats"/><figcaption>Better Boats</figcaption></a> 
    <a href="/"><img className="bottom-row-images" src={NewMoat} alt="Stoats"/><figcaption>More Moats</figcaption></a> 
    </div>
    <h2 className="bottom-row-text">NEW IN</h2>
    </section>
   
    
</>



);

 


export default Landing;
