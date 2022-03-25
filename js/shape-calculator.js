// Codigo del cuadrado

console.group("Cuadrados"); 

function perimetroCuadrado(lado){
    return  lado * 4;
}


function areaCuadrado (lado){
    return lado * lado;
}

console.groupEnd();


// Codigo del triangulo

console.group("Triangulos");

function perimetroTriangulo(ladoTriangulo_1, ladoTriangulo_2, baseTriangulo){

    return ladoTriangulo_1 + ladoTriangulo_2 + baseTriangulo;
}



function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

console.groupEnd();

// Codigo del circulo

console.group("Circulos");


// Diametro

function diametroCirculo(radio){

    return radio * 2;

}

// PI

const PI = Math.PI;// Math: Es una herramienta matematica

console.log(`PI es; ${PI}`)

// perimetro

function  circunferenciaCirculo(radio){
    
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// Area

function areaCirculo(radio){
    return (radio * radio) * PI;
}


console.groupEnd();



// Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const perimetro = perimetroCuadrado(value);
    document.getElementById('lbResultado').innerHTML = perimetro + "cm2";
    
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;


    const area = areaCuadrado(value);
    document.getElementById('lbResultado').innerHTML = area + "cm2";
}

// Triangulo

function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTrianguloSideA");
    const input2 = document.getElementById("InputTrianguloSideB");
    const input3 = document.getElementById("InputTrianguloBase");
    const value = Number(input.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value)


    const perimetroT = perimetroTriangulo(value,value2,value3);
    document.getElementById('lb2Resultado').innerHTML = perimetroT + "cm2";
    
}

function calcularAreaTriangulo(){
    const input = document.getElementById("InputTrianguloBase");
    const input2 = document.getElementById("InputTrianguloHeight");
    const value = Number(input.value);
    const value2 = Number(input2.value);


    const areaT = areaTriangulo(value,value2);
    document.getElementById('lb2Resultado').innerHTML = areaT + "cm2";
}


function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametroC = diametroCirculo(value);
    document.getElementById('lb3Resultado').innerHTML = diametroC + "cm2";
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetroC = circunferenciaCirculo(value);

    document.getElementById('lb3Resultado').innerHTML = perimetroC + "cm2";
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const areaC1 = areaCirculo(value);
    document.getElementById('lb3Resultado').innerHTML = areaC1 + "cm2";
}
