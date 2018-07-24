const state = {
    graficas: []
};

const fibonacci = (numero, numId, div) => {
    let var1 = 0;
    let var2 = 1;
    let var3;

    const grafica = document.createElement('div');
    grafica.className = 'grafica';
    grafica.id = numId;
    div.appendChild(grafica);

    const bar1 = document.createElement('div');
    grafica.style.height = 3 + "px";
    grafica.backgroung = "green";
    grafica.appendChild(bar1);

    const bar2 = document.createElement('div');
    grafica.style.height = 3 + "px";
    grafica.backgroung = "green";
    grafica.appendChild(bar2);

    for (var i = 3; i <= numero; i++) {
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;

        const bar = document.createElement('div');
        grafica.style.height = var3 * 3 + "px";
        grafica.backgroung = "green";
        grafica.appendChild(bar);
    }
}

const graficar = (estado) => {
    const pantalla = document.createElement('div');
    pantalla.className = 'pantalla';
    root.appendChild(pantalla);

    for (let i = 0; i < estado.graficas.length; i += 1) {
        const tiempo = document.createElement('div');
        tiempo.className = 'tiempo'
        tiempo.innerHTML = estado.graficas[i].time;
        pantalla.appendChild(tiempo);
        fibonacci(estado.graficas[i].numero, i, pantalla);
    }
    console.log(estado.graficas);
}

const render = lState => {
    //declaracion y creacion de elementos
    const seleccion = document.createElement('div');
    seleccion.className = 'seleccion';

    const input = document.createElement('input');
    input.className = 'input';
    input.placeholder = 'numero positivo'

    const btnGenerar = document.createElement('button');
    btnGenerar.innerHTML = 'Generar';
    btnGenerar.className = 'btn-generar';

    if (root.hasChildNodes()) {
        root.innerHTML = null;
    }

    root.appendChild(seleccion);

    seleccion.appendChild(input);
    seleccion.appendChild(btnGenerar);

    btnGenerar.onclick = () => {
        const fecha = new Date();
        lState.graficas.push({ numero: parseInt(input.value), time: fecha });
        graficar(lState);
    }

}

render(state);