
alert("hola mundo");

//do while

/*
function doWhile(num) {
    let i=0;
    do {
        console.log(i);
        i++;
    }while(1<num);
}

doWhile(0)

*/


/*while

function bucleWhile(num) {
    let i=0;
    while(i<num) {
        console.log(i);
        i++
    }
}

bucleWhile(11);
*/

//CICLOS

/*for

console.log("hola rodrigo");        
console.log("hola rodrigo");        
console.log("hola rodrigo");        
console.log("hola rodrigo");        
console.log("hola rodrigo");
*/

/*for(var i=0; i < 10;i++){
    console.log("hola desde ciclo for. Vuelta"+ i);

}

for ejercicio 

const frutas = ["Manzana","Mango","Pera","Piña","Sandia","Melon"];

//esta es otro pedo
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);
//

for(var i=0; i <frutas.length; i++){
console.log(frutas[i]);
}

*/





//----------------------FOR----------------------

/*
2.- Crear un programa que solicite 2 números por prompt. Mandar esos dos valores a una función por 
parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html.



let num1=parseInt (prompt ("dime el primer numero"));
let num2=parseInt (prompt ("dime el segundo numero"));


function suma (num1, num2){

    var resultado=num1+num2;
    document.write(resultado + "</br>");
}

 suma(num1,num2);

 

 function resta (num1, num2){

    var resultado=num1-num2;
    document.write(resultado + "</br>");
}

resta(num1,num2);

function multiplicacion (num1, num2){

    var resultado=num1*num2;
    document.write(resultado + "</br>");
}

multiplicacion(num1,num2);

function division (num1, num2){

    var resultado=num1/num2;
    document.write(resultado + "</br>");
}

division(num1,num2);

*/



/*
1.- Crear un programa que solicite al usuario su nombre por prompt y devuelva el siguiente saludo: 
"Hola nombre, saludos desde javascript". 
Nota: El saludo puede ser mostrado por consola o por html.


let nombre= prompt ('dime tu nombre');

document.write(' Hola ' + nombre + ' saludos desde javascript');

frase=`Hola  ${nombre} saludos desde javascript`

document.write(frase);
*/


//----------------------------------bootcamp------------------------------

//prompt basico

/*let nombre= prompt ("dime tu nombre");

alert(nombre);*/

/*

let nombre= prompt ('dime tu nombre');

alert(' Hola ' + nombre);*/

//CONCATENACION

/*saludo='hola pedro'
pregunta=' ,como estas?'

frase = saludo + pregunta;
document.write(frase);*/

/*nombre = 'gustavo'
//frase ='soy' + nombre + 'y estoy caminando';
frase=`soy  ${nombre} y estoy caminando`

document.write(frase);*/

//OPERADORES DE COMPARACION

/*let numero = 23;
let numero2 = 13;

document.write(numero = numero2)
document.write(numero != numero2)
document.write(numero === numero2)
document.write(numero !== numero2)
document.write(numero < numero2)
document.write(numero > numero2)
document.write(numero >= numero2)
document.write(numero <= numero2)*/

//Operadores logicos (&&) (||) (!)

/*let valor = true;
let valor2 = true;

let resultado = valor && valor2;
let resultado = valor || valor2;
let resultado = !valor;

document.write(resultado)*/

//CONDICIONALES IF, ELSE IF, ELSE

/*let nombre ="pedro";

if (nombre=="lucas"){
    alert("tu nombre es malardo");
}
else if (nombre == "dalto"){
    alert("tu nombre es malardo");
}
else {
    alert("tu nombre es otro");
}*/

//ARRAYS (arreglos)

/*let frutas= ["banana","mango","pera"];
document.write(frutas[1])*/

//ARRAYS ASOCIATIVOS

/*let pc1 = {
    nombre:"Huawei",
    procesador: "Ryzen 7",
    ram: "16gb",
    espacio: "1tb"
};

let nombre=pc1["nombre"];
let procesador=pc1["procesador"];
let ram=pc1["ram"];
let espacio =pc1["1tb"];

var frase= `el nombre de mi pc es: <b> ${nombre}</b> <br>
el procesador es: <b>${"procesador"}</b> <br>
el ram de mi pc es: <b>${"ram"}</b> <br>
el espacio de mi pc es: <b>${"1tb"}</b> <br>`;

document.write(frase);/*

/*BUCLES E ITERACION*/

/*numeroParaSumar = 0;

if (numeroParaSumar <10){
    numero++;

    document.write("es menor que 10");
}*/

//WHILE
/*
let numero = 0;

while (numero <= 6){
    numero++;
    
    document.write(numero+"<br>");
}
*/

//DOWHILE

/*
let numero = 0;

do{
    
    document.write(numero+"<br>");

    numero++;
}

while (numero > 6)
*/

//WHILE CON BREAK

/*
let numero=0;

while(numero < 1000) {
    numero++;
    document.write(numero);
    if(numero==10){
        break;
    }
}

document.write("el fin");
*/

//for

/*
for(let i=0; i<6; i++){
    document.write(i+"<br>")
}
*/

/*
let i=6;
for(i; i>=0; i--){
    document.write(i+"<br>")
}
document.write(i)
*/

//FOR CON CONTINUE Y BREAK

//en este ejemplo para en el 11 por el break
/*for (let i =0; i<=20; i++){
    if(i==12){
    break;
}
document.write(i+"<br>");
}
*/

//en este ejemplo se salta el 12 y continua con lo que se pidio

/*
for (let i =0; i<=20; i++){
    if(i==12){
    continue;
}
document.write(i+"<br>");
}
*/

//FOR IN Y FOR OF

/*
let animales=["gato","perro","tiranosaurio rex"];

//Este in da la posicion 0,1,2
//animal es [animal] es como un cero
//buscar posicion 
//document.write(animales[0]); es igual a animal

for (animal in animales){
    document.write(animal + "<br>");
}

document.write("<br>"); //este da un espacio

//este of imprime los valores gato, perro, tiranosaurio rex
for (animal of animales){
    document.write(animal + "<br>");

}
*/

//LABEL arrays dentro de arrays

/*
array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcelo",array1];

for (let array in array2){
    if(array ==2){
        for (let array of array1){
            document.write(array + "<br>");
        }
    }else{
            document.write(array2[array] + "<br>");
        }
    }
*/


























