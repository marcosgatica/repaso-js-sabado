// Programa una función que cuente el número de caracteres de una cadena de texto, 
//pe. miFuncion ("Hola Mundo") devolvera 10

function contarLetras(texto ='') {

	if (typeof texto !== 'string') return 'El valor ingresado no es una cadena';
	if (texto === '') return 'No ha ingresado nigun valor';
	return texto.length;
}

console.log(contarLetras('Hola a todos'));

// Programa una funcion que te devuelva el texto recortado segun el numero de caracteres indicados, 
//pe. miFuncion("Hola Mundo"), 4) devolvera "Hola"

var cadena1 = "La mañana se nos vino.";
var cadena2 = cadena1.slice(3, -4);
console.log(cadena2);

// Programa una funcion que dad una String te devuelva un Array de texto separados por cierto caracter, 
//pe. miFuncion('hola que tal', ' ') devolvera ['hola', 'que', 'tal'].

const array1 = [1,2, 'a', '1a'];

console.log(array1.toString());

//Programa una funcion para que calcule el precio de un producto aplicando,
//pe. miFuncion(1000, 20) devolvera 800.

var precio = 1000;
var oferta = 0.20;

console.log(precio-(precio * oferta));

//Calcular la edad de una persona, pe. miFuncion(new Date(1988,09,01)) devolvera 34 años.

function calcularEdad(anioActual, anioNacimiento) {
	return anioActual - anioNacimiento;
}

console.log(calcularEdad(2022, 2001));

//Programa que convierte decimal a romano hasta el número 1000. miFuncion (15) devolver: el 15 es XV


function convertirEnteroARomano(numero) {
	if (typeof numero != 'number' || !Number.isInteger(numero)) {
		return null;
	}

const ROMANOS = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX','XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

let digitos = String(numero).split('');
let romano = '';
let i = 3;

while (i--) {
	romano = (ROMANOS[+digitos.pop() + (i * 10)] || '') + romano
	    }

	return Array(+digitos.join('') + 1).join('M') + romano;
}

console.log(convertirEnteroARomano(11));
console.log(convertirEnteroARomano(23));
console.log(convertirEnteroARomano(8));

//Programa convierte decimal a binario. ejemplo: 1000 = 1111101000

let binario = numero => {
	let binarioArray = []
	while(numero > 1){
		binarioArray.push(numero % 2)
		numero = Math.floor(numero / 2)
	}
	binarioArray.push(numero)
	return parseInt(binarioArray.reverse().join(""))
}

console.log(binario(15))

console.log(binario(1000))

//Programa que devuelva el numero de vocales de una cadena de texto. Ejemplo: "Hola Mundo" = 4 vocales.

function contarVocales(frase) {
	if (typeof frase != 'string') {
	throw TypeError('El argumento debe ser una cadena de caracteres.');
}	
	
	let vocales = 'aeiouAEIOU';
	let contadorVocales = 0;

	for(let i = 0; i < frase.length; ++i) {
	if (vocales.indexOf(frase[i]) !== -1) {
	++contadorVocales;
		}
	}
	return contadorVocales;
}

try {
	console.log(contarVocales('Hola Mundo'));
} catch (e) {
	console.log('Error: $(e.message)');
}

try {
	console.log(contarVocales(1000));
} catch (e) {
	console.log('Error: $(e.message)');
}

//Programa que valide si una palabra es palindromo o no. Ejemplo: "Salas" = true, "Hola" = false.

function esPalindromo(texto) {
	if (typeof texto != 'string') {
	throw TypeError('El argumento debe ser una cadena de caracteres.');
}
	texto = texto.toLowerCase().replace(' ', '');

	return texto == texto.split('').reverse().join('');
}

try { 
	console.log(esPalindromo('salas'));
} catch (e) {
	console.log('Error: $(e.message)');
}

try { 
	console.log(esPalindromo('oso'));
} catch (e) {
	console.log(`Error: $(e.message)`);
}

try { 
	console.log(esPalindromo('revolver'));
} catch (e) {

}	console.log(`Error: $(e.message)`);

//Programa que elimine los espacios de una cadena de texto. Ejemplo: "Hola Mundo" = "HolaMundo"

let txt = 'Hola Mundo';

txt = txt.split(" ").join("");

console.log(txt);

//Programa que tome la primera letra de cada palabra y lo devuelva en mayusculas. Ejemplo "Marcos Gatica". Resultado: "MG"

let nombre = 'Marcos Gatica'

let resultado = nombre.slice(0, 1);
let resultado2 = nombre.slice(7, 8);

console.log(resultado);
console.log(resultado2);

//Programa que devuelva la cantidad de palabras de una cadena de texto. Ejemplo: "Hola Mundo"= 2 palabras.

let frase= "Hola Mundo"
console.log(frase);

console.log();

let palabras = frase.split(' ');

console.log(palabras);
console.log(palabras.length);

//Programa que devuelva el texto con la primera letra de cada palbara en mayúscula. Ejemplo: "hola mundo" = "Hola Mundo".

function makeTitle ( str ) {
	return str.split(' ')
		.map( word=> {
			return word[0].toUpperCase() + word.substring(1) 
		})
		.join(' ');
}
	let str1 = "hola mundo";
	let str2 = "mayuscula una letra de cada palabra"

	let response2 =makeTitle(str1);
	let response = makeTitle(str2);
	console.log(response2);
	console.log(response);

//Programa que devuelva la cadena de texto invertida. Ejemplo: "Hola Mundo" = "odnuM aloH"

let lenguaje = 'Hola Mundo'



console.log();

let lenguajeInvertido = lenguaje.split('').reverse().join('');

console.log(lenguaje,lenguajeInvertido);

//Programa que pase un arreglo de numeros y devuelva la suma de todos los numeros. ejemplo: suma(10, 20, 30, 40, 50) = "La suma de todos los numeros es 150"

var A = 10;
var B = 20;
var C = 30;
var D = 40;
var E = 50;

console.log((A+B+C+D+E));

//Programa que pase un arreglo de edades y devuelva la mayor y la menor. Ejempl: edades(10, 20, 30, 40, 50,) = "La edad mayor es 50 y la edad menor es 10"

function minMax(arr) {
	let min = arr[0]
	let max = arr[0]
	for(let i = 0; i<arr.length;i++){
		if(min > arr[i]){
			min = arr[i]
		}
		if(max < arr[i]){
			max = arr[i]
		}
	}
	return [min, max]
}

console.log(minMax([20, 4, 5, 30, 2]));

//Programa una escala de notas de 0 a 10. Ejemplo: 0-5 = "pésimo", 6-7 ="regular", 8-9 = "bueno", 10 = "excelente".

//Programa que devuelva el numero de cifras de un numero entero. Ejemplo: 1234 = 4 cifras.

function contarDigitosEntero(numero) {
	if (typeof numero !='number' || !Number.isInteger(numero)) {
		throw TypeError('Debe pasar como argumento un número entero.');
	}
	let contador = 0;

	while (numero >=1 ) {
		++contador;

		numero /= 10;
	}

	return contador;
}

try {
	console.log(contarDigitosEntero(1234));
} catch (e) {
	console.log(`Error: $(e.message)`);
}

//Programa que muestre los numeros primos de 1 al 1000

function generarPrimos(n) {
	if (typeof n === 'number' && Number.isInteger(n)) {
		if (n >= 2) {
			let primos = [];
			let hayPrimo = [];

			for(let i = 1; i <= n + 1; ++i) {
				hayPrimo.push(true);
			}
			for(let i = 2; i <= n; ++i) {
				if (hayPrimo[i]) {
					primos.push(i);

					for (let j = 1; j * i <= n; ++j) {
						hayPrimo[i * j] = false;
					}
				}
			}
		}

		return primos;
	} else {
		throw Error('El número debe ser mayor o igual a 2.');
			} 
	
} 

try {
	console.log(generarPrimos(1000));
} catch (e) {
	console.log(`Error: $(e.message)`);
}

// Programa que realice el juego de piedra, papel o tijera.