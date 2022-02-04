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
    return lado1 + lado2 + base;
}

function areaTriangu(base, altura) {
    return (base * altura) / 2;
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

//Interaccion con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(params) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}