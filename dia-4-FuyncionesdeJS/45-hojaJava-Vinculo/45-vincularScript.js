        // Para vincular un script en el html se debe utilizar la etiqueta <script> y dentro de ella
        //no es necesario escribir la etiqueta script, solo el codigo, dentro de la hoja script.
        function calcular(){
            let km = document.getElementById("textokm").value;
           let resultado= Math.ceil(km/8.8);
           //para mostrar en pantalla el resultado se debe utilizar el document.getElementById
           //colocamos donde queremos que aparesca por su id y el .textContent para mostrar el texto.
           document.getElementById("txtresultado").textContent = "Carga: " + resultado + " Lts";
        }
