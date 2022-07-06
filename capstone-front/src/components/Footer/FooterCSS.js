import styled from 'styled-components';
   
export const FooterBackground = styled.div`
  padding: 0.0001px;
  background-color: #101522;
  position: relative;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 7px 3px;
  }
`;
   
export const FooterBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;

`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const Link = styled.a`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
&:hover {
  color: #cd9042 !important;
  transition: 0.3s ease-out;
  text-decoration: none !important;

  }
`;
   
export const Heading = styled.p`
  font-size: 15px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;