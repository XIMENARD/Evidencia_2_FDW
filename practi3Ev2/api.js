const inputNombrePais = document.getElementById("nombrePais");
const botonBuscar = document.getElementById("botonBuscar");
const capital = document.getElementById("capital");
const imagenBandera = document.getElementById("imagenBandera");
const listaLenguajes = document.getElementById("lenguajes");
const independiente = document.getElementById("independiente");
const poblacionActual = document.getElementById("poblacion");
const region = document.getElementById("region");
const subregion = document.getElementById("subregion");

async function buscarInfoPais(){
    const respuesta = await fetch("https://restcountries.com/v3.1/name/" + inputNombrePais.value);
    const infoPais = await respuesta.json();

    let info = 0;

    capital.innerText = infoPais[0].capital[0];
    imagenBandera.src = infoPais[0].flags.png;
    independiente.innerText = infoPais[0].independent;
    poblacionActual.innerText = infoPais[0].population;
    region.innerText = infoPais[0].region;
    subregion.innerText = infoPais[0].subregion;


    const lenguajes = Object.values(infoPais[0].languages);
    listaLenguajes.innerHTML = "";
    const lenguajeLi = document.createElement("li");

    lenguajes.forEach(i => {
    lenguajeLi.innerText = i;
    listaLenguajes.appendChild(lenguajeLi);
    });

}

botonBuscar.addEventListener("click",e => {
    e.preventDefault();
    console.log("listo");
    
    buscarInfoPais();
});