import React from 'react';
import { useState} from "react";
import { Container, Content, Input, SearchIcon} from './search.styled';
import { IoSearch } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";

const Search: React.FC = () => {

  const [value, setValue] = useState("");
  const history = useNavigate();

  function handleSearch(e: any) {
    e.preventDefault();
    setValue(e.target.value);
  }

  function handleButton(e: any) {
    e.preventDefault();
    history(`/stores?name=${value}`);
  }

  return (
    <Container>
        <Content>,
          <SearchIcon/>
          <Input type="search" placeholder="Pesquise aqui o seu produto" onChange={handleSearch}/>
          <button type="button" onClick={handleButton}>Pesquisar</button>
        </Content>
    </Container>
  );
}

export default Search;