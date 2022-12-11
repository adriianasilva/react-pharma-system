import React from 'react';
import { Container, Content, Input, SearchIcon} from './search.styled';
import { IoSearch } from 'react-icons/io5';

const Search: React.FC = () => {
  return (
    <Container>
        <Content><SearchIcon/><Input/></Content>
    </Container>
  );
}

export default Search;