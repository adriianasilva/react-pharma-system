import { Link, NavLink } from "react-router-dom";
import "./styles.css";

interface IStore {
  name: string;
  src: string;
  price: number;
  link: string;
}

export function Store({ name, src, price, link }: IStore) {
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
          <NavLink to={link}>Comprar</NavLink>
        </div>
    </div>
  );
}