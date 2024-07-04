let domPeso = document.querySelector('#peso');
let arrayPesos = ["Hasta 0.5kg", "Hasta 5Kg", "Hasta 10Kg", "Hasta 20Kg"];
for (let i = 0; i < arrayPesos.length; i++) {
    let option = document.createElement('option');
    option.textContent = arrayPesos[i];
    option.setAttribute("value", i);
    domPeso.appendChild(option);
}
domPeso.addEventListener("click", MostrarCalculo);



let domDestino = document.querySelector('#destino');
let arrayDestinos = ["Local", "Provincial", "Comunidad Autonoma", "Nacional", "Ceuta y Melilla", "Baleares y Canarias", "Europa", "Resto del mundo"];
for (let i = 0; i < arrayDestinos.length; i++) {
    let option = document.createElement('option');
    option.textContent = arrayDestinos[i];
    option.setAttribute("value", i);
    domDestino.appendChild(option);
}
domDestino.addEventListener('click', MostrarCalculo);



let arrayPrecios = [
    [4.88, 6.75, 8.49,11.39],
    [10.88, 9.75, 11.49,14.39],
    [10.88, 12.75, 14.49,17.39],
    [14.88, 16.75, 18.49,21.39],
    [20.88, 22.75, 24.49,27.39],
    [18.88, 20.75, 22.49,25.39],
    [22.88, 24.75, 26.49,29.39],
    [27.88, 29.75, 31.49,34.39]
]


function MostrarCalculo() {
    p = domPeso.value;
    d = domDestino.value;
    let mensaje1 = document.querySelector("#mensaje1")
    console.log('destino',d,'peso',p);
    if (!(p < 0 || d < 0)) {
        mensaje1.textContent ='Coste de '+arrayPrecios[d][p]+' €';
    }
    else {
        mensaje1.textContent = "Seleccione";
    }

}