import React from 'react';
import { Container, Content, Input} from './search.styled';

const Search: React.FC = () => {
  return (
    <Container>
        <Content>
          <img src='./assets/search-icon.svg'/>
          <Input/>
        </Content>
    </Container>
  );
}

export default Search;