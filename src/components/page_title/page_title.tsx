import "./page_title.styles.css";

interface IPage_Title {
    search_value: string | null;
  }

export function Page_title ({search_value} : IPage_Title) {
    return(    
        <div className="container_title">
            <div className="store-name">
                    <h2 id="title">Você buscou por: {search_value}</h2>
            </div>
            <hr></hr>
        </div> 
    );
}