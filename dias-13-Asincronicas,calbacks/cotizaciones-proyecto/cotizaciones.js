// llamamos a los elemtos a los que manipularemos en el html
let logo= document.getElementById("logo");
let titulo= document.getElementById("titulo");
let usd= document.getElementById("usdAeur");
let eur= document.getElementById("arsAusd");
let ars= document.getElementById("btcAusd");
let usd1;
let eur1;
let ars1;
// !los addvenlistener van aqui
document.addEventListener("DOMContentLoaded",TodasLasFunciones);

// !las funciones van aqui
// function que consulta  las apis y las muestra en el html
async function consultaApis(){
    // consultamos las cotizaciones del usd
   let respuesta1= await fetch('https://api.coindesk.com/v1/bpi/currentprice.json'); 
   let datos1= await respuesta1.json();
   usd1= datos1.bpi.USD.rate;

   // consultamos la cotizaciones del euro
 let respuesta2= await fetch("https://open.er-api.com/v6/latest/USD");
 let datos2= await respuesta2.json();
  eur1= datos2.rates.EUR;
// cotizacion del ars
    let respuesta3= await fetch("https://open.er-api.com/v6/latest/ARS");
    let datos3= await respuesta3.json();
    ars1= datos3.rates.USD;
};

//function que carga logo y titulo
function cargarLogoyTitulo(){
  logo.src = "dinero.png";
  titulo.textContent = "Cotizaciones";
};
// function que cargue en las p la informacion de si es usd a euro y que espere miestra las respuesta de la primera function pero con este dato ya cargado
function mostrarDatos(){
  let gifthcargando = document.createElement("img");
  gifthcargando.id = "cargando";
  gifthcargando.src ="pronto.gif"; 
  usd.textContent = " USD: ";
  eur.textContent = "EUR: ";
  ars.textContent = "ARS: ";
   
  setTimeout(() => {
    usd.innerHTML = "USD: " + usd1;
    eur.innerHTML = "EUR: " + eur1;
    ars.innerHTML = "ARS: " + ars1;
  }, 5000);

  setTimeout(() => {
    usd.innerHTML = "USD: ";
    eur.innerHTML = "EUR: ";
    ars.innerHTML = "ARS: ";
    usd.appendChild(gifthcargando.cloneNode(true));
    eur.appendChild(gifthcargando.cloneNode(true));
    ars.appendChild(gifthcargando.cloneNode(true));
  }, 0);
}

function TodasLasFunciones(){
  consultaApis()
  .then(() => {
    mostrarDatos();
    cargarLogoyTitulo();
  })
  .catch((error) => {
    console.error("Error en la consulta de APIs:", error);
  });
}