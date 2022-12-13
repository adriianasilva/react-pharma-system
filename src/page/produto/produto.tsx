import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page_title } from '../../components/page_title/page_title';
import { Result } from '../../components/result/result';
import { Button } from '../../components/search/search.styled';
import { useQuery } from '../../hooks/useQuery';
import {Container, ContainerResultado, ContainerSearch, Content, CruzIcon, Input, OrangeBox, SearchIcon} from './produto.styled';

interface IProduct {
  name: string;
  price: number;
  linkToProduct: string;
  store: string;
  image: string;
  discountedPrice: number;
}

const Produto: React.FC = () => {

  const [medicamento, setMedicamento] = useState(useQuery().get("name"));
  const [listMedicamentos, setListMedicamentos] = useState([]);
  const [searchlabel, setsearchlabel] = useState<string | null>("product");
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
    Axios.get(`https://nodejs-ufba.onrender.com/v1/search/${value}/-12.952709/-38.460768`).then(response => {
      setListMedicamentos(response.data.results)
      //console.log(response.data.results);
    })
    localStorage.setItem('product', value)
    setsearchlabel(localStorage.getItem('product'))
  }

  function handleKeypress(e: any){
    const key = e.charCode;
    if(key === 13){
      handleButton(e);
    }
  };

  useEffect(() => {
    Axios.get(`https://nodejs-ufba.onrender.com/v1/search/${medicamento}/-12.952709/-38.460768`).then(response => {
      setListMedicamentos(response.data.results)
      //console.log(response.data.results);
    })
    setsearchlabel(localStorage.getItem('product'))
  }, [])
  
  return (
    <Container>
      <OrangeBox>
          <a href='/'> <img src='./assets/3.png'/></a>
          <ContainerSearch>
            <Content>
              <SearchIcon/>
              <Input type="search" placeholder="Pesquise aqui o seu produto" onChange={handleSearch} onKeyPress={handleKeypress}/>
              <Button><button type="submit" onClick={handleButton}>Pesquisar</button></Button>
            </Content>
          </ContainerSearch>
          <CruzIcon/>
      </OrangeBox>  
      <Page_title search_value={searchlabel}/>
      <ContainerResultado>
      {
          listMedicamentos.map((value: IProduct, i: any) => {
            console.log(value);
            return <><Result name={value.name} src={value.image} price={value.price}/></>
          })
        }
      </ContainerResultado>  
    </Container>
  );
}

export default Produto;