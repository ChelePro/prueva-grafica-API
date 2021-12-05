
/**
 * URL base de la peticion
 */
var url_base = "https://api.coindesk.com/v1/bpi/currentprice.json";
/**
 * Almacena el precio actual del bitcoin, en un array para poder graficarlo.
 */
var historico_precio = [];
var precioBTC= 0;

/**
 * Funcion que se ejecuta al cargar la pagina, se encarga de hacer la peticion, y mostrar el precio actual.
 * 
 * @returns Retorna una promesa con el precio actual del bitcoin
 */
async function peticion(){
    const peticion  =  await fetch(url_base);
    const respuesta = peticion.json();
    return respuesta;
}
/**
 * Funcion que recibe la promesa para poder mostrar el precio actual del bitcoin.
 * @param {Promesa} texto 
 */
function promesa(texto){
  precioBTC = texto.bpi.USD.rate_float;
  historico_precio.push(texto.bpi.USD.rate_float);
  console.log(historico_precio);
}

peticion().then(promesa);
/**
 * Se ejecutara cada 30 segundos, para actualizar el precio del Bitcoin.
 */
setInterval('peticion().then(promesa)',30000);