import React from 'react';
import { Container, Content, Input, SearchIcon} from './search.styled';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";

const Search: React.FC = () => {

  const history = useNavigate();

  function handleSubmit(e: any) {
    e.preventDefault();

    history('/stores?name=dipirona');
}

  return (
    <Container>
        <Content>
          <SearchIcon/>
          <Input onDoubleClick={handleSubmit}/>
        </Content>
    </Container>
  );
}

export default Search;