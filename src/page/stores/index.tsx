import { useEffect, useState} from "react";
import Header from "../../components/header/header";
import { Store } from "../../components/store";
import { useQuery } from "../../hooks/useQuery";
import Axios from 'axios';
import "./styles.css";
import { findByText } from "@testing-library/react";

interface IProduct {
  name: string;
  price: number;
  linkToProduct: string;
  store: string;
  image: string;
  discountedPrice: number;
}

/* 
<Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
*/

export function Stores() {

  const [medicamento, setMedicamento] = useState(useQuery().get("name"));
  const [listMedicamentos, setListMedicamentos] = useState([]);

  useEffect(() => {
    Axios.get(`https://nodejs-ufba.onrender.com/v1/search/${medicamento}/-12.952709/-38.460768`).then(response => {
      setListMedicamentos(response.data.results)
      console.log(response.data.results);
    })
  }, [])

  return(
    <div className="page-stores">
      <Header/>
      <h2>{medicamento}</h2>
      <hr></hr>
      <div className="list-stores">
      <>
        {
          listMedicamentos.map((value: any) => {
            console.log(value);
            <Store name={value.name} src={value.src} price={value.price} />
          })
        }
      </>
      <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
      <h2>Nome Produto</h2>
      <hr id="line"></hr>
      <div className="list-stores">
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
      </div>
    </div>
  );
}


