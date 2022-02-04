console.group("Cuadrado");

//Calculo de Perimetro de cuadrado
//var lados = 5;

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

//Calculo del area del cuadrado
//const areaCuadrado = lados * lados;
function areaCuadrado(lado) {
    return lado * lado;
}

//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

console.group("Triangulo");
//var ladoTriangulo1 = 6;
//var ladoTriangulo2 = 6;
//var baseTriangulo = 4;
//const alturaTriangulo = 5.5;
function perimetroTriangulo(lado1, lado2, base) {
    var a = parseInt(lado1, 10);
    var b = parseInt(lado2, 10);
    var c = parseInt(base, 10);

    return a + b + c;

}

function areaTriangu(base, altura) {
    var b = parseInt(base, 10);
    var a = parseInt(altura, 10);
    return (b * a) / 2;
}

//Altura de triangulo isoceles
/*function alturaTrianguloIsoceles(lado1, lado2, base) {
    if (lado1 === lado2) {
        var laditosUP = Math.pow(lado1, 2);
        var baseUP = Math.pow(base, 2);
        var calc = (laditosUP - (baseUP / 4));
        return Math.sqrt(calc);

        //return Math.sqrt((Math.pow(lado1, 2)) - ((Math.pow(base, 2)) / 4))

    }
    return "no tiene 2 lados iguales";
}*/

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}

//var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
/*console.log("Los lados del triangulo son: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm"); 
console.log("La altura del triangulo es: " + alturaTriangulo);
console.log("El area del triangulo es: " + areaTriangulo);*/
console.groupEnd();

//Circulo
console.group("Circulos");

//const radioCirculo = 4;
//const diametro = radioCirculo * 2;
const pi = Math.PI;
//perimetro del circulo
//const perimetroCirculo = diametro * pi;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio); //calcula el diametro en la otra funcion
    return diametro * pi;
}

//area del circulo

function areaCirculo(radio) {
    return (radio * radio) * pi;
}

/*const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El radio del circulo es: " + radioCirculo + " cm2");
console.log("El diametro del circulo es: " + diametro + " cm2");
console.log("Pi es igual a: " + pi);
console.log("El perimetro del circulo es: " + perimetroCuadrado + " cm");
console.log("El area del circulo es: " + areaCirculo + " cm2");
*/

//Interaccion con el HTML para cuadrados
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}


//Interactua con el HTML para triangulos
function calcularPerimetroTriangulo() {
    let value1 = 0;
    let value2 = 0;
    let value3 = 0;
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    value1 = input1.value;
    value2 = input2.value;
    value3 = input3.value;
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);

}

function calcularAreaTriangulo() {
    let value1 = 0;
    let value2 = 0;
    let value3 = 0;
    let value4 = 0;
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    const input4 = document.getElementById("InputAltura");
    value1 = input1.value;
    value2 = input2.value;
    value3 = input3.value;
    value4 = input4.value;
    const area = areaTriangu(value3, value4);
    alert(area);
}