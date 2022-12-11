import React from 'react';
import {Container, ContainerResultado, ContainerSearch, Content, CruzIcon, Input, OrangeBox, SearchIcon} from './produto.styled';

const Produto: React.FC = () => {
  return (
    <Container>
      <OrangeBox>
          <img src='./assets/3.png'/>
          <ContainerSearch>
            <Content>
              <SearchIcon/>
              <Input/>
            </Content>
          </ContainerSearch>
          <CruzIcon/>
      </OrangeBox>  
      <ContainerResultado>
      </ContainerResultado>  
    </Container>
  );
}

export default Produto;