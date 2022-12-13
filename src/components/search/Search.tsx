import React from 'react';
import { useState} from "react";
import { Button, Container, Content, Input, SearchIcon} from './search.styled';
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
    // To store data
    localStorage.setItem('product', value);
    e.preventDefault();
    history(`/produto?name=${value}`);
  }

  function handleKeypress(e: any){
    const key = e.charCode;
    if(key === 13){
      handleButton(e);
    }
  };
  
  return (
    <Container>
        <Content>,
          <SearchIcon/>
          <Input type="search" placeholder="Pesquise aqui o seu produto" onChange={handleSearch} onKeyPress={handleKeypress}/>
          <Button><button type="submit" onClick={handleButton}>Pesquisar</button></Button>
        </Content>
    </Container>
  );
}

export default Search;