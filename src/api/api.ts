import Axios from 'axios';



async function getProductList(){
    const medicamento='Dipirona';
    Axios.get
    (`https://nodejs-ufba.onrender.com/v1/search/${medicamento}/-12.952709/-38.460768`)
    .then(response => console.log(response.data.results));
}

