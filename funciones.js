function suma(a,b){
return a+b
}

function resta(a,b){
    return a-b
}

function palabras(){
    let texto=prompt("Ingrese su texto")
    let arrayTexto=[];
    arrayTexto=texto.split(/[ ,.;¿?!¡]/).filter(Boolean)
    let cantidad=prompt("Ingrese la cantidad de palabras que quiere obtener")

    if(cantidad>arrayTexto.length){
        console.log("Cantidad erronea")
        return
    }

    for(i=0;i<cantidad;i++){
        console.log(`${i+1}) ${arrayTexto[i]} `)
    }
}