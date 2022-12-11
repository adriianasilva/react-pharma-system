import React from 'react';
import { ContainerSearch, Content, CruzIcon, Input, OrangeBox, SearchIcon } from './header.styled';

const Header: React.FC = () => {
  return (
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
  );
}

export default Header;