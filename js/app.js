//VARIABLES
const resultado = document.querySelector('#resultado')
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minimo = document.querySelector('#minimo')
const maximo = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
const max = new Date ().getFullYear();
const min = max - 10;


//OBJETO

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//EVENTOS


document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //MUESTRA LOS AUTOS AL CARGAR

    llenarSelect(); //LLENAR EL SELECT DE AÑOS
})

//EVENTS

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value
    filtrarAuto()
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value)
    filtrarAuto()
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value
    filtrarAuto()
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value
    filtrarAuto()
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value)
    filtrarAuto()
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value
    filtrarAuto()
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value
    filtrarAuto()
});



//FUNCIONES

function mostrarAutos(autos){
    //ITERAR SOBRE AUTOS

    limpiarHTML();

    autos.forEach(auto => {
        //DESTRUCTURING
        const {marca, modelo, year, precio, puertas, color, transmision, } = auto
        //CREANDO ELEMENTO TEXTO PARA CADA AUTO
        const autoHTML = document.createElement('P')

        autoHTML.textContent = `
        
        ${marca} - ${modelo} - ${year} - ${precio} - ${puertas} - ${color} - ${transmision}

        `;

        resultado.appendChild(autoHTML)
    });
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild)
    }
}

function llenarSelect(){
    for(let i = max; i >= min; i--){
        const option = document.createElement('option')
        option.value = i;
        option.textContent = i;
        year.appendChild(option)
    }
}

function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear). filter(filtrarMinimo). filter(filtrarMaximo). filter(filtrarPuertas). filter(filtrarTransmision). filter(filtrarColor)
    
    if(resultado.length){
        mostrarAutos(resultado)
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div')
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = 'No hay resultados, intente con otra busqueda'
    resultado.appendChild(noResultado)
}


function filtrarMarca(auto){
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca
    }
    return auto;
}

function filtrarYear(auto){
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year
    }
    return auto;
}

function filtrarMinimo(auto){
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo
    }
    return auto;
}

function filtrarMaximo(auto){
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo
    }
    return auto;
}

function filtrarPuertas(auto){
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas
    }
    return auto;
}

function filtrarTransmision(auto){
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision
    }
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color
    }
    return auto;
}
