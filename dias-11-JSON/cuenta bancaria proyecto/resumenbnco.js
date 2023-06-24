// declaramso la variable donde se guardara mas adelante la respueta del fetch
let datosjson;
// pasamos a hacer la solicitud mediante elk metodo fethc
fetch("resumenbnco.json")
.then(res=>res.json())
.then((salida)=>{
    datosjson=salida;
    // declaramos una variable que guarde el elemeto del html donde queremos que se visualice la informacion del json
    let mostrar=document.getElementById("mostrar");
    // ahora le decimos que el contenido de ese elemento sea igual a la informacion que nos devuelve el json
    mostrar.innerHTML= `Mi banco es: ${datosjson.banco} <br> Mi sucursal es: ${datosjson.sucuarsal} <br> Titular: \n${datosjson.titular} <br> Numero de cuenta: \n${datosjson.nro_cuenta} <br> Saldo: \n${saldo1()}  CBU: \n${datosjson.CBU} <br> Abierto desde: \n${datosjson.abierto} `;
    function saldo1(){
        let saldos = datosjson.saldo;
        let saldoStr = '';
        for (let saldo of saldos){
            saldoStr += `${saldo.moneda}: ${saldo.monto} <br> `;
        }
        return saldoStr;
    }
})
.catch(error=>alert(error));