import React from 'react';
import { Page_title } from '../../components/page_title/page_title';
import { Result } from '../../components/result/result';
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
      <Page_title search_value={'Dipirona'}/>
      <ContainerResultado>
        <Result name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Result name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Result name="teste" src="./assets/dipirona.jpg" price={20}/>
      </ContainerResultado>  
    </Container>
  );
}

export default Produto;