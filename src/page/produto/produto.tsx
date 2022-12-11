import React from 'react';
import { Container, ContainerSearch, Content, CruzIcon, CruzIconOrange, Input, OrangeBox } from './produto.styled';

const Produto: React.FC = () => {
  return (
    <Container>
      <OrangeBox>
          <img src='./assets/3.png'/>
          <ContainerSearch>
            <Content>
              <img src='./assets/search-icon.svg'/>
              <Input/>
            </Content>
          </ContainerSearch>
          <CruzIcon/>
      </OrangeBox>    
      <CruzIconOrange/>  
    </Container>
  );
}

export default Produto;