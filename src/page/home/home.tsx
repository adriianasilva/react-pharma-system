import React from 'react';
import Search from '../../components/search/Search';
import {Container, ContainerIcon, ContainerImg, CruzIcon, CruzIconOrange, CruzIconDarkPurple, OrangeBox} from './home.styled';


const Home: React.FC = () => {
  return (
    <Container>
      <OrangeBox>
        <ContainerImg>
        <img src='./assets/3.png'/>
        </ContainerImg>
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