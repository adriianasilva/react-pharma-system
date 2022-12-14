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

export function Stores() {

  const [medicamento, setMedicamento] = useState(useQuery().get("name"));
  const [listMedicamentos, setListMedicamentos] = useState([]);

  useEffect(() => {
    Axios.get(`https://nodejs-ufba.onrender.com/v1/search/${medicamento}/-12.952709/-38.460768`).then(response => {
      setListMedicamentos(response.data.results)
      //console.log(response.data.results);
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
          listMedicamentos.map((value: IProduct, i: any) => {
            console.log(value);
            return <><Store name={value.name} src={value.image} price={value.price} link={value.linkToProduct}/></>
          })
        }
      </>
    </div>
    </div>
  );
}

