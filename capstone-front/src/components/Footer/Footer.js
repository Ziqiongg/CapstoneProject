import React from "react";
import {
  FooterBackground,
  FooterBox,
  Row,
  Column,
  Link,
  Heading,
} from "./FooterCSS";
  
const Footer = () => {
  return (
    <FooterBackground>
      <FooterBox>
        <Row>
        <Column>
            <Heading>Main</Heading>
            <Link href="/">Home</Link>
            <Link href="/productlist">Categories</Link>
            <Link href="/trendingpage">Trending Products</Link>
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <Link href="/ourmissionpage">The Mission</Link>
          </Column>

          <Column>
            <Heading>Contact Us</Heading>
            <Link href="https://github.com/alh40">Alex</Link>
            <Link href="https://github.com/Ziqiongg">Carol</Link>
            <Link href="https://github.com/Lambert-Simnel">Joseph</Link>
            <Link href="https://github.com/michelletambi">Michelle</Link>
            <Link href="https://github.com/pe-a-ce">Peace</Link>
          </Column>
          <Column>
            <Heading>Terms Privacy</Heading>
            <Link href="/conditions">Terms  Conditions</Link>
           
          </Column>
        </Row>
      </FooterBox>
    </FooterBackground>
  );
};
export default Footer;

