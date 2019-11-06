// crear los años
const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function getCars() {
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
    ];
}

let dataSearch = {
    brand: '',
    year: '',
    min: '',
    max: '',
    doors: '',
    transmition: '',
    color: ''
}

const cars = getCars();

// Wait until the HTML is loaded
document.addEventListener('DOMContentLoaded', () => {
	showCars(cars);
});

// Form's Event Listeners
const brand = document.querySelector('#marca');
brand.addEventListener('input', e => {
    dataSearch.brand = e.target.value;
    // Car's filter
    filterCars();
});
const year = document.querySelector('#year');
year.addEventListener('input', e => {
    dataSearch.year = Number(e.target.value);
    // Car's filter
    filterCars();
});
const mini = document.querySelector('#minimo');
mini.addEventListener('input', e => {
    dataSearch.min = Number(e.target.value);
    // Car's filter
    filterCars();
});
const maximo = document.querySelector('#maximo');
maximo.addEventListener('input', e => {
    dataSearch.max = Number(e.target.value);
    // Car's filter
    filterCars();
});
const doors = document.querySelector('#puertas');
doors.addEventListener('input', e => {
    dataSearch.doors = Number(e.target.value);
    // Car's filter
    filterCars();
});
const transmition = document.querySelector('#transmision');
transmition.addEventListener('input', e => {
    dataSearch.transmition = e.target.value;
    // Car's filter
    filterCars();
});
const color = document.querySelector('#color');
color.addEventListener('input', e => {
    dataSearch.color = e.target.value;
    // Car's filter
    filterCars();
});


// Print elements into the HTML
function showCars(cars) {
    const container = document.querySelector('#resultado');

    // Clean HTML
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Build HTML
    cars.forEach(car => {
        const HTMLCar = document.createElement('p');
        HTMLCar.innerHTML = `
            <p>${ car.marca } ${ car.modelo } - ${ car.year } - ${ car.puertas } Puertas - Transmisión: ${ car.transmision } - Precio: ${ car.precio } - Color: ${ car.color }</p>
        `;
        container.appendChild(HTMLCar);
    });
}

function filterCars() {
    const result = getCars().filter(brandFilter).filter(yearFilter).filter(minFilter).filter(maxFilter).filter(doorsFilter).filter(transmitionFilter).filter(colorFilter);
    if (result.length) {
        showCars(result);
    } else {
        alert('No hay resultados');
    }
}

function brandFilter(car) {
    if (dataSearch.brand) {
        return car.marca === dataSearch.brand;
    } else {
        return car;
    }
}
function yearFilter(car) {
    if (dataSearch.year) {
        return car.year === dataSearch.year;
    } else {
        return car;
    }
}
function minFilter(car) {
    if (dataSearch.min) {
        return car.precio >= dataSearch.min;
    } else {
        return car;
    }
}
function maxFilter(car) {
    if (dataSearch.max) {
        return car.precio <= dataSearch.max;
    } else {
        return car;
    }
}
function doorsFilter(car) {
    if (dataSearch.doors) {
        return car.puertas === dataSearch.doors;
    } else {
        return car;
    }
}
function transmitionFilter(car) {
    if (dataSearch.transmition) {
        return car.transmision === dataSearch.transmition;
    } else {
        return car;
    }
}
function colorFilter(car) {
    if (dataSearch.color) {
        return car.color === dataSearch.color;
    } else {
        return car;
    }
}