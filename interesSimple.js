// Formula Interes simple: C * n * i

function montoTotal (cuota, tiempo){
    return cuota * tiempo
}
function interes(cuota, tiempo, tasaInteres){
    return cuota * tiempo * tasaInteres
}
    function mostrar(mensaje){
    alert(" El monto total a pagar por este préstamo es: " + mensaje );
}

var cantidadCuotas = parseInt(prompt("Elige la opcion que mas le convenga: \n1 - Préstamo menor a 12 cuotas \n2 - Préstamo entre 12 y 24 cuotas \n3 - Préstamo mayor a 24 cuotas"));

if (cantidadCuotas == 1){

    var tiempo = parseInt(prompt("Número de cuotas: "));
    while(tiempo >= 12){
    alert("Segun el plan seleccionado, la cantidad de cuotas debe ser menor a 12 cuotas");
    tiempo = parseInt(prompt("Número de cuotas: ")); 
}
    cuota = parseInt(prompt("Monto a pagar en cada una de las cuotas: "));
    tasaInteres = 0.10;
    var calculo = montoTotal(cuota, tiempo) + interes(cuota, tiempo, tasaInteres);
    mostrar(calculo);
} 
else if (cantidadCuotas == 2) {

    var tiempo = parseInt(prompt("Número de cuotas: "));
    while(tiempo < 12 || tiempo > 24){
    alert("Segun el plan seleccionado, la cantidad de cuotas debe ser entre 12 y 24 cuotas");
    tiempo = parseInt(prompt("Número de cuotas: ")); 
}
    cuota = parseInt(prompt("Monto a pagar en cada una de las cuotas: "));
    tasaInteres = 0.20;
    var calculo = montoTotal(cuota, tiempo) + interes(cuota, tiempo, tasaInteres);
    mostrar(calculo);
} 
else if (cantidadCuotas == 3) {

    var tiempo = parseInt(prompt("Número de cuotas: "));
    while(tiempo <= 24){
    alert("Segun el plan seleccionado, la cantidad de cuotas debe ser mayor a 24 cuotas");
    tiempo = parseInt(prompt("Número de cuotas: ")); 
}
    cuota = parseInt(prompt("Monto a pagar en cada una de las cuotas: "));
    tasaInteres = 0.30;
    var calculo = montoTotal(cuota, tiempo) + interes(cuota, tiempo, tasaInteres);
    mostrar(calculo);
}
else {
    alert ("Ingrese alguna de las opciones disponibles: 1 o 2 ");
}