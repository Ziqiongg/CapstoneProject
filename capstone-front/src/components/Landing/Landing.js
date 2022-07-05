import React from 'react';
import './Landing.css';
import BigHat from'./ProductImages/Hats/PingHat.jpg';
import AvocadoHat from './ProductImages/Hats/AvocadoHat.jpg';
import Crown from './ProductImages/Hats/Crown.jpg';
import DinoCoat from './ProductImages/Coats/DinoCoat.jpg';
import WorldCoat from './ProductImages/Coats/WorldCoat.jpg';
import FrogHat from './ProductImages/Hats/FrogHat.jpg';
import FunkyCoat from './ProductImages/Coats/FunkyCoat.jpg';
import MagicCoat from './ProductImages/Coats/MagicCoat.jpg';
import electronics from './ProductImages/Phones/electronics.jpg';
import Gear_Samsung_Galaxy_A01_back_SOURCE_Samsung from './ProductImages/Phones/Gear_Samsung_Galaxy_A01_back_SOURCE_Samsung.jpg';
import iphone_red from './ProductImages/Phones/iphone_red.jpg';
import iphone13_blue from './ProductImages/Phones/iphone13_blue.jpg';
import iphone13_list from './ProductImages/Phones/iphone13_list.jpg';
import samsung_galaxy_a9_2016_white from './ProductImages/Phones/samsung_galaxy_a9_2016_white.jpg';
import CoatPile from './ProductImages/Coats/CoatPile.jpg';
import HatPile from './ProductImages/Hats/PileOfHats.jpg';
import canary_food from './ProductImages/PetFood/canary_food.jpg';
import canary_food2 from './ProductImages/PetFood/canary_food2.png';
import cat_food1 from './ProductImages/PetFood/cat_food1.jpeg';
import cat_food2_ from './ProductImages/PetFood/cat_food2_.jpg';
import cat_food3 from './ProductImages/PetFood/cat_food3.jpeg';
import cockatiel_food1 from './ProductImages/PetFood/cockatiel_food1.jpeg';
import cockatiel_food2 from './ProductImages/PetFood/cockatiel_food2.jpeg';
import cockatiel_food3 from './ProductImages/PetFood/cockatiel_food3.jpeg';
import dog_food_1 from './ProductImages/PetFood/dog_food_1.jpg';
import dog_food_2 from './ProductImages/PetFood/dog_food_2.jpg';
import dog_food3 from './ProductImages/PetFood/dog_food3.jpg';
import petfood from './ProductImages/PetFood/petfood.jpg';
import instruments from './ProductImages/Instruments/instruments.jpg';
import pets from './ProductImages/Pets/pets.jpg';
import Stoat from './ProductImages/Pets/Stoat.jpg';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Landing = () => (

<>


<div>
  {/* top row images */}
  {/* links to product category page, will add a href once they have been created^^ */}
  <h2 className='category-text'>CATEGORIES</h2>
  <section className="landing-top-container">
      
      {/* <div className="landing-page-top-row"> */}

    
      <Link to="/productslist"><img className="top-row-img" src={electronics} alt="Phone Category"></img><figcaption>Phones</figcaption></Link>
      <Link to="/productslist"><img className="top-row-img" src={petfood} alt="Pet Food Category"></img><figcaption>Pet Food</figcaption></Link>
      <Link to="/productslist"><img className="top-row-img" src={pets} alt="Pet Category"></img><figcaption>Pets</figcaption></Link>
      <Link to="/productslist"><img className="top-row-img" src={CoatPile} alt="Coats Category"></img><figcaption>Coats</figcaption></Link>
      <Link to="/productslist"> <img className="top-row-img" src={HatPile} alt="Hat Category"></img><figcaption>Hats</figcaption></Link>
      <Link to="/productslist"> <img className="top-row-img" src={instruments} alt="Instruments Category"></img><figcaption>Instruments</figcaption></Link>

    
    
  </section>
</div>


{/* image carousel */}
<section id="trending-products">
        <div className="landing-page-slide-wrapper">

<Carousel>
  <div>
            <Link to="/products/id/1"><img className="animated-img" src={BigHat} alt="pingu hat"/></Link>
            {/* <figcaption>Big Boi Hat</figcaption></a> */}

            {/* <Link to="/products/id/2"><img className="animated-img" src={LittleBoat} alt="LittleBoat"/></Link> */}

            <Link to="/products/id/2"><img className="animated-img" src={Gear_Samsung_Galaxy_A01_back_SOURCE_Samsung} alt="Galaxy a01"/></Link>

            {/* <figcaption>Little Boat</figcaption></a> */}

            <Link to="/"><img className="animated-img" src={samsung_galaxy_a9_2016_white} alt="Galaxy A9"/></Link>
            {/* <figcaption>Quaker Oats</figcaption></a> */}
            
</div>

<div>
            <a href="/products/id/4"><img className="animated-img" src={iphone_red} alt="Red Iphone"/></a>
            {/* <figcaption>Thicc Oats</figcaption></a> */}
            
            <a href="/products/id/5"><img className="animated-img" src={iphone13_blue} alt="Blue Iphone"/></a>

            {/* <figcaption>Special Goat</figcaption></a> */}

            <Link to="/"><img className="animated-img" src={AvocadoHat} alt="Avocado Hat"/></Link>
            {/* <figcaption>Avocado Hat</figcaption></a> */}
</div>
<div>
            <Link to="/"><img className="animated-img" src={Crown} alt="Crown"/></Link>
            {/* on>Crown</figcaption></a> */}
            
            
            <Link to="/"><img className="animated-img" src={DinoCoat} alt="Dino Coat"/></Link>
            {/* <figcaption>Dino Cat</figcaption></a> */}
            <Link to="/"><img className="animated-img" src={WorldCoat} alt="World Coat"/></Link>
            {/* <figcaption>World Coat</figcaption></a> */}
            </div>
<div>
            <Link to="/"><img className="animated-img" src={FunkyCoat} alt="Funky Coat"/></Link>
            {/* <figcaption>Funky Coat Coat</figcaption></a> */}

            <Link to="/"><img className="animated-img" src={FrogHat} alt="FrogHat"/></Link>
            {/* <figcaption>Frog Bucket Hat</figcaption></a> */}

           
            <Link to="/"><img className="animated-img" src={MagicCoat} alt="Magic Coat"/></Link>
            {/* <figcaption>Magic Coat</figcaption></a>  */}
            </div>
            </Carousel>     
       </div>
       <h2 className="carousel-text">TRENDING PRODUCTS </h2>  
    </section> <br/>


    <section>
    <div className="bottom-row-container">

    <Link to="/"><img className="bottom-row-images"src={Stoat} alt="Stoats"/><figcaption>STOAT STUFF</figcaption></Link> 
    {/* <Link to="/"><img className="bottom-row-images" src={MediumBoat} alt="Boats"/><figcaption>BETTER BOATS</figcaption></Link> 
    <Link to="/"><img className="bottom-row-images" src={NewMoat} alt="Moats"/><figcaption>MORE MOATS</figcaption></Link>  */}

    </div>
    <h2 className="bottom-row-text">NEW IN</h2>
    </section>
   
    
</>



);

 


export default Landing;
