var graficar,myChart;

document.getElementById("btn").onclick = function () {
    let a = document.getElementById("val1").value;
    let b = document.getElementById("val2").value;
    let c = document.getElementById("val3").value;

    let raiz1, raiz2;
    let discriminante = (Math.pow(b,2))-(4*a*c);

    if (discriminante > 0) {
        raiz1 = ((((-1)*b) + Math.sqrt(discriminante)) / (2*a)).toFixed(2);
        raiz2 = ((((-1)*b) - Math.sqrt(discriminante)) / (2*a)).toFixed(2);
        document.getElementById("result").innerHTML = `La raíz cuadrática de la ecuación X1 = ${raiz1} y X2 = ${raiz2}`;
        document.getElementById('myChart').style.background = 'white'; //Agregar fondo de color blanco a la gráfica
        graficar = document.getElementById("myChart").getContext("2d"); //Utilizar recursos de chart.js
        if (myChart) {
            myChart.destroy(); //Destruir funcionamiento de myChart para utilizarlo nuevamente
        }
        myChart = new Chart(graficar, {type: "line",data: {labels: ["", "X1", "X2", ""],datasets: [{label: "Solución",data: [0, raiz1, raiz2, 0],backgroundColor: ["rgb(0, 0, 0)", "rgb(0,0,0)"],},],},
        options: {animations: {tension: {duration: 1000,easing: "linear",from: 1,to: 0,loop: true,},},scales: {y: {min: -10,max: 10,},},},});
    } else if (discriminante == 0) {
        raiz1 = raiz2 = (((-1)*b) / (2 * a)).toFixed(2);
        document.getElementById("result").innerHTML = `La raíz cuadrática de la ecuación X1 = ${raiz1} y X2 = ${raiz2}`;

        //para agregarle color de fondo blanco
        document.getElementById('myChart').style.background = 'white';
        /*Utilizamos los recursos de chart.js para poder graficar*/
        graficar = document.getElementById("myChart").getContext("2d");
        /*Si ya utilizamos mychart, hay que destruirlo para poder utilizarlo después*/
        if (myChart) {
            myChart.destroy();
        }
        myChart = new Chart(graficar, {type: "line",data: {labels: ["", "X1", "X2", ""],datasets: [{label: "Solución",data: [0, raiz1, raiz2, 0],backgroundColor: ["rgb(0, 0, 0)", "rgb(0,0,0)"],},],},
        options: {animations: {tension: {duration: 1000,easing: "linear",from: 1,to: 0,loop: true,},},scales: {y: {min: -10,max: 10,},},},});
    } else {
    //Si la raiz no es real
    let parteReal = ((((-1)*b) / 2) * a).toFixed(2);
    let parteImaginaria = (Math.sqrt(-discriminante) / (2 * a)).toFixed(2);
    let solucion1 = parteReal + parteImaginaria;
    let solucion2 = parteReal - parteImaginaria;
    document.getElementById("result").innerHTML = `La raiz cuadrática de la ecuación S = {${parteReal} + ${parteImaginaria}i,${parteReal} - ${parteImaginaria}}`;
    document.getElementById('myChart').style.background = 'white';
    graficar = document.getElementById("myChart").getContext("2d");
    if (myChart) {
        myChart.destroy();
    }
    myChart = new Chart(graficar, {type: "line",data: {labels: ["", "X1", "X2", ""],datasets: [{label: "Solución",data: [0, raiz1, raiz2, 0],backgroundColor: ["rgb(0, 0, 0)", "rgb(0,0,0)"],},],},
    options: {animations: {tension: {duration: 1000,easing: "linear",from: 1,to: 0,loop: true,},},scales: {y: {min: -10,max: 10,},},},});
  }
};