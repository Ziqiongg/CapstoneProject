import React from 'react';
import './Landing.css';
import BigHat from'./ProductImages/Hats/PingHat.jpg';
import AvocadoHat from './ProductImages/Hats/AvocadoHat.jpg';
import DinoCoat from './ProductImages/Coats/DinoCoat.jpg';
import WorldCoat from './ProductImages/Coats/WorldCoat.jpg';
import FunkyCoat from './ProductImages/Coats/FunkyCoat.jpg';
import Doggy from './ProductImages/Pets/golden.jpg';
import MarioHat from './ProductImages/Hats/MarioHat.jpg';
import electronics from './ProductImages/Phones/electronics.jpg';
import Gear_Samsung_Galaxy_A01_back_SOURCE_Samsung from './ProductImages/Phones/Gear_Samsung_Galaxy_A01_back_SOURCE_Samsung.jpg';
import Raincoat from './ProductImages/Coats/RainCoat.jpg';
import Smartwatch from './ProductImages/Phones/Aswee.jpg';
import iphone13_list from './ProductImages/Phones/iphone13_list.jpg';
// import samsung_galaxy_a9_2016_white from './ProductImages/Phones/samsung_galaxy_a9_2016_white.jpg';
// import CoatPile from './ProductImages/Coats/CoatPile.jpg';
// import HatPile from './ProductImages/Hats/PileOfHats.jpg';
// import canary_food from './ProductImages/PetFood/canary_food.jpg';
// import canary_food2 from './ProductImages/PetFood/canary_food2.png';
// import cat_food1 from './ProductImages/PetFood/cat_food1.jpeg';
import cat_food2_ from './ProductImages/PetFood/cat_food2_.jpg';
// import cat_food3 from './ProductImages/PetFood/cat_food3.jpeg';
// import cockatiel_food1 from './ProductImages/PetFood/cockatiel_food1.jpeg';
// import cockatiel_food2 from './ProductImages/PetFood/cockatiel_food2.jpeg';
// import cockatiel_food3 from './ProductImages/PetFood/cockatiel_food3.jpeg';
// import dog_food_1 from './ProductImages/PetFood/dog_food_1.jpg';
// import dog_food_2 from './ProductImages/PetFood/dog_food_2.jpg';
// import dog_food3 from './ProductImages/PetFood/dog_food3.jpg';
import petfood from './ProductImages/PetFood/petfood.jpg';
import instruments from './ProductImages/Instruments/instruments.jpg';
import pets from './ProductImages/Pets/pets.jpg';
import Stoat from './ProductImages/Pets/Stoat.jpg';
import { Card, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../Header/Header';


const Landing = () => (

<>

{/* image carousel */}

<Header />


<div className = "home">
  <br></br>
<div>
    <h2>Trending Products</h2>
  </div>
<section id="trending-products">

        <div className="landing-page-slide-wrapper">
        
<Carousel showArrows={true} showThumbs={false}>
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
                      
            <Link to="/products/id/18"><img className="animated-img" src={AvocadoHat} alt="Avocado Hat"/></Link>
            <Link to="/products/id/12"><img className="animated-img" src={DinoCoat} alt="Dino Coat"/></Link>
            <Link to="/products/id/11"><img className="animated-img" src={WorldCoat} alt="World Coat"/></Link>
          
            </div>
            <div>
            <Link to="/products/id/14"><img className="animated-img" src={FunkyCoat} alt="Funky Coat"/></Link>
            <Link to="/products/id/19"><img className="animated-img" src={MarioHat} alt="Mario Hat"/></Link>
            <Link to="/products/id/15"><img className="animated-img" src={Raincoat} alt="White Rain Coat"/></Link>
            
            </div>
            </Carousel>     
    </div>
       
  </section> <br/>

<Row xs={1} xl = {4} sm = {2} md={3} className="landing-products">
    <div className="shop-by-section">
      <Link to="/ourpledge">
        <Card className='shop-by-section__card'>
          <Card.Body>
          <div><h2 className="landing-image-header">Discover more-sustainable products</h2></div>
            <Card.Img
            className = "landscape-image"
              variant="top"
              src = "https://images-eu.ssl-images-amazon.com/images/G/02/ES-hq/2022/img/Brand_Truths/XCM_CUTTLE_1444269_2429296_379x304_1X_tr_TR._SY304_CB634020827_.jpg"  data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/02/ES-hq/2022/img/Brand_Truths/XCM_CUTTLE_1444269_2429296_758x608_2X_tr_TR._SY608_CB634020827_.jpg"
                          
                          />
                          <div className="a-cardui-footer"><Button variant="link">Discover now</Button></div>
            
          </Card.Body>
        </Card>
      </Link>
      </div>

      <div className="shop-by-section">
      <Link to="/productcategory/electronics">
        <Card className='shop-by-section__card'>
          <Card.Body>
          <div><h2 className="landing-image-header">Amazon Recycled Products</h2></div>
            <Card.Img
            className = "landscape-image-recycled"
              variant="top"
              src = "https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2022/img/Certified_Refurbished/XCM_Manual_2352952_4700418_379x304_1X_en_GB._SY304_CB636729320_.jpg" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/02/UK-hq/2022/img/Certified_Refurbished/XCM_Manual_2352952_4700418_758x608_2X_en_GB._SY608_CB636729320_.jpg"

                          />
                          
                          <div className="a-cardui-footer"><Button variant="link">See more</Button></div>
            
          </Card.Body>
        </Card>
      </Link>
      </div>

      <div className="shop-by-section">
      <Link to="/productcategory/petfood">
        <Card className='shop-by-section__card'>
          <Card.Body>
          <div><h2 className="landing-image-header">Top Deals</h2></div>
            <Card.Img
            className = "landscape-image-broken"
              variant="top"
              src = "https://m.media-amazon.com/images/I/31X+P6MZaOL._AC_SY230_.jpg"
                          />
                          <div className="broken-footer">
                            <p>Up to £200 off!
                            
                            </p>
                            <Button variant="link">See more deals!</Button></div>
            
          </Card.Body>
        </Card>
      </Link>
      </div>

      <div className="shop-by-section">
      <Link to="/products/id/17">
        <Card className='shop-by-section__card'>
          <Card.Body>
          <div><h2 className="landing-image-header">Special Edition Items!</h2></div>
            <Card.Img
            className = "landscape-image-broken-second"
              variant="top"
              src = "https://m.media-amazon.com/images/I/61sO80diJiL._AC_UL1200_.jpg"
                          />
                          <div className="broken-footer-second">
                            <p>Get your Pingu Hat now! Limited Offer!
                            </p>
                            <Button variant="link">See more deals!</Button></div>
          </Card.Body>
        </Card>
      </Link>
      </div>
      </Row>
    
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div>
    <h2>Most Searched Categories</h2>
  </div>


  <Row xs={1} xl = {4} sm = {2} md={3} className="landing-products">
    <div className="shop-by-section">
      <Link to="/productcategory/electronics">
        <Card className='shop-by-section__card'>
          <Card.Body>
          <div><h2 className="landing-image-header">Electronics</h2></div>
            <Card.Img
            className = "landscape-image-second"
              variant="top"
              src = {electronics}
                          
                          />
                          <div className="a-cardui-footer"><Button variant="link">View</Button></div>
            
          </Card.Body>
        </Card>
      </Link>
      </div>

      <div className="shop-by-section">
      <Link to="/productcategory/petfood">
        <Card className='shop-by-section__card'>
          <Card.Body>
          <div><h2 className="landing-image-header">Pet Food</h2></div>
            <Card.Img
            className = "landscape-image-second"
              variant="top"
              src = {petfood}

                          />
                          <div className="a-cardui-footer"><Button variant="link">View</Button></div>
            
          </Card.Body>
        </Card>
      </Link>
      </div>

      <div className="shop-by-section">
      <Link to="/productcategory/pets">
        <Card className='shop-by-section__card'>
          <Card.Body>
          <div><h2 className="landing-image-header">Pets</h2></div>
            <Card.Img
            className = "landscape-image-second"
              variant="top"
              src = {pets}
                          />
                          <div className="broken-footer">
                            <Button variant="link">View</Button></div>
            
          </Card.Body>
        </Card>
      </Link>
      </div>

      <div className="shop-by-section">
      <Link to="/productcategory/instruments">
        <Card className='shop-by-section__card'>
          <Card.Body>
          <div><h2 className="landing-image-header">Instruments</h2></div>
            <Card.Img
            className = "landscape-image-second"
              variant="top"
              src = {instruments}
                          />
                          <div className="broken-footer">
                            <Button variant="link">View</Button></div>
            
          </Card.Body>
        </Card>
      </Link>
      </div>
    

      </Row>

      <br></br>
      <br></br>
      <br></br>


  <div>
    <h2>Best Selling Books</h2>
  </div>
  <section className="landing-page-slide-wrapper">
      

  <Carousel showArrows={true} showThumbs={false}>
  <div>
  <Link to="/productcategory/books"><img className="top-row-img" src="https://m.media-amazon.com/images/I/71ZDoj3jYrL._AC_SY200_.jpg"alt="Book1"></img></Link>
  <Link to="/productcategory/books"><img className="top-row-img" src="https://m.media-amazon.com/images/I/81PdOsc95OL._AC_SY200_.jpg" alt="Book2"></img></Link>
  <Link to="/productcategory/books"><img className="top-row-img" src="https://m.media-amazon.com/images/I/71FXfPs-iyL._AC_SY200_.jpg" alt="Book3"></img></Link>
  <Link to="/productcategory/books"><img className="top-row-img" src="https://m.media-amazon.com/images/I/71gwdjwLMPL._AC_SY200_.jpg" alt="Book4"></img></Link>
  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/61vpLGF61XL._AC_SY200_.jpg" alt="Book5"></img></Link>
  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/81qz88X-X2L._AC_SY200_.jpg" alt="Book6"></img></Link>
  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/81a1hKsCKbL._AC_SY200_.jpg" alt="Book7"></img></Link>

  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/71-IAaCJ21L._AC_SY200_.jpg" alt="Book8"></img></Link>
  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SY200_.jpg" alt="Book9"></img></Link>
  </div>
  <div>
  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/81RJ4FlpbFL._AC_SY200_.jpg" alt="Book10"></img></Link>
  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/71p+rKfcNKL._AC_SY200_.jpg" alt="Book11"></img></Link>

  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/61TGDPQr+YL._AC_SY200_.jpg" alt="Book12"></img></Link>
  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/71jte84ADvL._AC_SY200_.jpg" alt="Book13"></img></Link>
  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/715WPdBM2yL._AC_SY200_.jpg" alt="Book14"></img></Link>
  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/81JArrdJUeL._AC_SY200_.jpg" alt="Book15"></img></Link>
  <Link to="/productcategory/books"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/81BBAyv-CJL._AC_SY200_.jpg" alt="Book16"></img></Link>

  </div>
</Carousel>
  </section>


  <br></br>
  <br></br>

  <div>
    <h2>Best Sellers in Computers & Accessories</h2>
  </div>
  <section className="landing-page-slide-wrapper">
      

  <Carousel showArrows={true} showThumbs={false}>
  <div>
  <Link to="/productcategory/computeracces"><img className="top-row-img" src="https://m.media-amazon.com/images/I/41D+fmjH7KS._AC_SY200_.jpg"alt="computeracces1"></img></Link>
  <Link to="/productcategory/computeracces"><img className="top-row-img" src="https://m.media-amazon.com/images/I/71pVtSXBjnL._AC_SY200_.jpg" alt="computeracces2"></img></Link>
  <Link to="/productcategory/computeracces"><img className="top-row-img" src="https://m.media-amazon.com/images/I/61SKSov8rHL._AC_SY200_.jpg" alt="computeracces3"></img></Link>
  <Link to="/productcategory/computeracces"><img className="top-row-img" src="https://m.media-amazon.com/images/I/61rCyL-CuCL._AC_SY200_.jpg" alt="computeracces4"></img></Link>
  <Link to="/productcategory/computeracces"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/61jhzv9AQRL._AC_SY200_.jpg" alt="computeracces7"></img></Link>
  <Link to="/productcategory/computeracces"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/81pGNKhsxiL._AC_SY200_.jpg" alt="computeracces5"></img></Link>
  <Link to="/productcategory/computeracces"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/61s6SXAMuqL._AC_SY200_.jpg" alt="computeracces6"></img></Link>
  <Link to="/productcategory/computeracces"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/61CpaftEHuL._AC_SY200_.jpg" alt="computeracces7"></img></Link>

  <Link to="/productcategory/computeracces"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/61d0uTjKbkL._AC_SY200_.jpg" alt="computeracces8"></img></Link>
  <Link to="/productcategory/computeracces"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/716bhKVOTfL._AC_SY200_.jpg" alt="computeracces9"></img></Link>
  </div>
  <div>
  <Link to="/productcategory/computeracces"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/717GmyTdpbS._AC_SY200_.jpg" alt="computeracces10"></img></Link>
  <Link to="/productcategory/computeracces"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/61qqUIC65qL._AC_SY200_.jpg" alt="computeracces11"></img></Link>

  <Link to="/productcategory/computeracces"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/61pUul1oDlL._AC_SY200_.jpg" alt="computeracces12"></img></Link>
  <Link to="/productcategory/computeracces"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/61T85CGI4ZL._AC_SY200_.jpg" alt="computeracces13"></img></Link>
  <Link to="/productcategory/computeracces"> <img className="top-row-img" src="https://m.media-amazon.com/images/I/51a1nqFl8YL._AC_SY200_.jpg" alt="computeracces14"></img></Link>
  </div>
</Carousel>



     

  </section>


</div>




{/* image carousel */}



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
