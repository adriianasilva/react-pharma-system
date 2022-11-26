import React from 'react';
import Search from '../../components/search/Search';
import { Container, CruzIcon, CruzIconOrange, OrangeBox } from './home.styled';


const Home: React.FC = () => {
  return (
    <Container>
      <OrangeBox>
          <img src='./assets/3.png'/>
          <CruzIcon/>
      </OrangeBox>
      <Search/>    
      <CruzIconOrange/>  
    </Container>
  );
}

export default Home;