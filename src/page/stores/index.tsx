import Header from "../../components/header/header";
import { Store } from "../../components/store";
import "./styles.css";

export function Stores() {
  return(
    <div className="page-stores">
      <Header/>
      <h2>Nome Produto</h2>
      <hr></hr>
      <div className="list-stores">
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
        <Store name="teste" src="./assets/dipirona.jpg" price={20}/>
      </div>
    </div>
  );
}