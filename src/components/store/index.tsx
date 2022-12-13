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
        <img src={src} alt={name}/>
        <div className="store-name">
          <h2>{name}</h2>
        </div>
        <div className="store-price">
          <h3>{price}</h3>
        </div>
        <button>
          Comprar
        </button>
    </div>
  );
}