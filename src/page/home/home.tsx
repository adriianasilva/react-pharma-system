import React from 'react';
import Search from '../../components/search/Search';
import {Container, ContainerIcon, CruzIcon, CruzIconOrange, CruzIconDarkPurple, OrangeBox} from './home.styled';


const Home: React.FC = () => {
  return (
    <Container>
      <OrangeBox>
          <img src='./assets/3.png'/>
          <CruzIcon/>
      </OrangeBox>
      <Search/>    
      <ContainerIcon>
        <CruzIconDarkPurple/>
        <CruzIconOrange/>
      </ContainerIcon>
        
    </Container>
  );
}

export default Home;