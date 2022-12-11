import "./styles.css";

interface IResult {
    name: string;
    src: string;
    price: number;
  }

export function Result ({name, src, price} : IResult) {
    return(
        <div className="stores">
             <img src={src} alt={name}/>
             <div className="store-name">
                <h2>{name}</h2>
            </div>
                <div className="store-price">
                <h3>{price}</h3>
                </div>
        </div> 
    );
}

