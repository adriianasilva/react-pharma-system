import React from 'react';
import { ContainerSearch, Content, CruzIcon, Input, OrangeBox } from './header.styled';

const Header: React.FC = () => {
  return (
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
  );
}

export default Header;