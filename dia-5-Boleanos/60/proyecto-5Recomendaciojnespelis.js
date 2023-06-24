function recomendar(genero){
    let txtEdad= document.getElementById("textoEdad").value;
    let recomendarPelicula= document.getElementById("textoRecomendacion");
switch(genero){
case `comedia`:
    if(txtEdad<=13){
        recomendarPelicula.textContent="Recomendamos la pelicula: Shrek";
    }else{
        if (txtEdad<=16){
            recomendarPelicula.textContent="Recomendamos la pelicula: Chicas Pesadas";
        }else{
            recomendarPelicula.textContent="Recomendamos la pelicula: American Pie";      
        }
    }
break;

case `terror`:
    if(txtEdad<=13){
        recomendarPelicula.textContent="Recomendamos la pelicula: Caroline";
    }else{
        if (txtEdad<=16){
            recomendarPelicula.textContent="Recomendamos la pelicula: El Conjuro";
        }else{
            recomendarPelicula.textContent="Recomendamos la pelicula: El Resplandor";      
        }
    }
break;
case `romance`:
    if(txtEdad<=13){
        recomendarPelicula.textContent="Recomendamos la pelicula: la Bella y la Bestia";
    }else{
        if (txtEdad<=16){
            recomendarPelicula.textContent="Recomendamos la pelicula: Titanic";
        }else{
            recomendarPelicula.textContent="Recomendamos la pelicula: La La Land";      
        }
    }
break;

case `accion`:
    if(txtEdad<=13){
        recomendarPelicula.textContent="Recomendamos la pelicula:Mulán";
    }else{
        if (txtEdad<=16){
            recomendarPelicula.textContent="Recomendamos la pelicula: Fast and Furious";
        }else{
            recomendarPelicula.textContent="Recomendamos la pelicula: John Wick";      
        }
    }
break;
default:
    recomendarPelicula.textContent="Por favor seleccione un genero valido";
break;
}
}