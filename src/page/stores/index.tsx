import Header from "../../components/header/header";
import { Store } from "../../components/store";

export function Stores() {
  return(
    <div>
      <Header/>
      <h2>Nome Produto</h2>
      <hr></hr>
      <Store name="teste" src="teste" price={20}/>
      <Store name="teste" src="teste" price={20}/>
      <Store name="teste" src="teste" price={20}/>
      <Store name="teste" src="teste" price={20}/>
    </div>
  );
}