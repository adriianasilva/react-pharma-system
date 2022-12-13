import { Link } from "react-router-dom";
import "./styles.css";

interface IStore {
  name: string;
  src: string;
  price: number;
}

export function Store({ name, src, price }: IStore) {
  return(
    <div className="stores">
      <div className="img-product">
         <img src={src} alt={name}/>
      </div> 
        <div className="store-price">
          <h2>{price}</h2>
        </div>
        <div className="store-name">
          <h3>{name}</h3>
        </div>
        <div className="buy-button">
          <button>
            Comprar
          </button>
        </div>
    </div>
  );
}