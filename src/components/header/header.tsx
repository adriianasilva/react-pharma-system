import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerSearch, Content, CruzIcon, Input, OrangeBox, SearchIcon } from './header.styled';

const Header: React.FC = () => {
  return (
      <OrangeBox>
          <Link to='/'> <img src='./assets/3.png'/></Link>
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