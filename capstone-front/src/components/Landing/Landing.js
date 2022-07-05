import React from 'react';
import './Landing.css';
import BigHat from'./ProductImages/Hats/PingHat.jpg';
import AvocadoHat from './ProductImages/Hats/AvocadoHat.jpg';
import Crown from './ProductImages/Hats/Crown.jpg';
import DinoCoat from './ProductImages/Coats/DinoCoat.jpg';
import WorldCoat from './ProductImages/Coats/WorldCoat.jpg';
import FrogHat from './ProductImages/Hats/FrogHat.jpg';
import FunkyCoat from './ProductImages/Coats/FunkyCoat.jpg';
import Doggy from './ProductImages/Pets/golden.jpg';
import MagicCoat from './ProductImages/Coats/MagicCoat.jpg';
import MarioHat from './ProductImages/Hats/MarioHat.jpg';
import electronics from './ProductImages/Phones/electronics.jpg';
import Gear_Samsung_Galaxy_A01_back_SOURCE_Samsung from './ProductImages/Phones/Gear_Samsung_Galaxy_A01_back_SOURCE_Samsung.jpg';
import iphone_red from './ProductImages/Phones/iphone_red.jpg';
import Raincoat from './ProductImages/Coats/RainCoat.jpg';
import Smartwatch from './ProductImages/Phones/Aswee.jpg';
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
            <Link to="/products/id/17"><img className="animated-img" src={BigHat} alt="pingu hat"/></Link>
            <Link to="/products/id/8"><img className="animated-img" src={Doggy} alt="Golden retriever adoption"/></Link>
            <Link to="/products/id/2"><img className="animated-img" src={Gear_Samsung_Galaxy_A01_back_SOURCE_Samsung} alt="Galaxy a01"/></Link>
            </div>

            <div>
            <Link to="/products/id/3"><img className="animated-img" src={iphone13_list} alt="Assortment of Iphones"/></Link>
            <Link to="/products/id/1"><img className="animated-img" src={Smartwatch} alt="Aswee smart watch"/></Link>
            <Link to="/products/id/6"><img className="animated-img" src={cat_food2_} alt="Shiba cat food"/></Link>
           
            </div>
            <div>
                      
            <Link to="/products/id/14"><img className="animated-img" src={AvocadoHat} alt="Avocado Hat"/></Link>
            <Link to="/products/id/18"><img className="animated-img" src={DinoCoat} alt="Dino Coat"/></Link>
            <Link to="/products/id/11"><img className="animated-img" src={WorldCoat} alt="World Coat"/></Link>
          
            </div>
            <div>
            <Link to="/products/id/14"><img className="animated-img" src={FunkyCoat} alt="Funky Coat"/></Link>
            <Link to="/products/id/15"><img className="animated-img" src={MarioHat} alt="Mario Hat"/></Link>
            <Link to="/products/id/15"><img className="animated-img" src={Raincoat} alt="White Rain Coat"/></Link>
            
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
