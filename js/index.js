//Ejercicio 1: Ensalada de Frutas

let ensaladaDeFrutas = ["manzana", "banana", "naranja", "durazno", "frutilla"]
for (let i = 0; i < ensaladaDeFrutas.length; i++)
    console.log("Las frutas que hay en la ensalada son:" + ensaladaDeFrutas[i]);

//Ejercicio 2: Promedio de edad

let promedio = (edades) => {

    let edadMaxima = Math.max(...edades);
    let edadMinima = Math.min(...edades);


    let promedio = (edadMaxima + edadMinima) / 2;

    console.log("Edad promedio es: " + promedio);
}

promedio([1, 28, 17, 31, 9, 35])

//Ejercicio 3: Mis amigos

let amigos = ["Ryan", "Kieran", "Mark", "Miguel"]

let cuatroLetras = []

for (let i = 0; i < amigos.length; i++) {
    if (amigos[i].length <= 4)
        cuatroLetras.push(amigos[i]);
}
console.log(cuatroLetras);

//Ejercicio 4: Metodos de arrays

const listaDeSuper = ["jabon", "pasta", "azucar", "arroz", "tomates"]
listaDeSuper.push("shampoo")
console.log(listaDeSuper)

listaDeSuper.shift()
console.log(listaDeSuper)


console.log(listaDeSuper.length)

console.log(listaDeSuper.indexOf("shampoo"));

//ejercicio 5: Mi primera funcion

function saludo() {
    alert("Bienvenido")

}

console.log("Hola, soy tu primera funcion saludo")
saludo()

//ejercicio 6: Calculando el mayor

function calculoMayor(num1, num2) {
    if (num1 > num2) {
        alert(`${num1} es mayor que ${num2}.`)

    } else if (num1 < num2) {
        alert(`${num1} es menor que ${num2}.`)
    } else {
        alert(`${num1} es igual a ${num2} `);
    }
}

//ejercicio 7: Los amigos

function filtrarAmigos(arr) {
    let amigos = ["Ryan", "Kieran", "Mark", "Miguel"]

    let cuatroLetras = []

    for (let i = 0; i < amigos.length; i++) {
        if (arr[i].length <= 4)
            cuatroLetras.push(arr[i]);
    }

    console.log(cuatroLetras);

}
const amigo1 = ["Ryan", "Kieran", "Mark", "Miguel"]
const amigo2 = ["Ringo", "Jhon", "Paul", "George", "Ada", "Marie"]
console.log(filtrarAmigos(amigo1));
console.log(filtrarAmigos(amigo2));

//ejercicio 8: Tirar dados

function tirarDado() {

    const dado = [1, 2, 3, 4, 5, 6]

    let numeroAleatorio = (Math.floor(Math.random() * 6))

    console.log(dado[numeroAleatorio])
}
console.log(tirarDado());

//ejercicio 9: creando y consultando un objeto

const toDoList = {
    'tipo de tareas': "Compras",
    dia: "Lunes",
    productos: ["azucar", "leche", "harina", "manteca"],
    'cantidad de productos': [1, 2, 3, 4],
    estado: "pendiente",
    notificacion: function notificacion() {
        alert("Esta tarea tiene una prioridad urgente!")
    }
}
console.log(toDoList.dia);
console.log(toDoList['tipo de tareas']);
console.log(toDoList['cantidad de productos']);
console.log(toDoList.notificacion());

//ejercicio 10: 

const superHeroes = {
    "squadName": "Super Hero Squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [{
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance", "Turning tiny", "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch", "Damage resistance", "Superhuman reflexes"
            ]
        }
    ]
}

//Consulta el valor ("Super Hero Squad") de la propiedad squadName.

console.log(superHeroes["squadeName"]);

//Consulta el valor que dice "Madame Uppercut" (ayuda:
// objeto-propiedad-arreglo-propiedad).

console.log(superHeroes.members[1].name);

//Consulta el valor que dice "Superhuman reflexes"

console.log(superHeroes.members[1].powers[2]);

//Consulta el valor "39" de la propiedad age de Madame Uppercut.

console.log(superHeroes.members[1].age);

//EJERCICIOS DE METODOS AVANZADOS DE ARRAYS

//Mis amigos

function filtrarAmigos(nombre) {

    return nombre.length === 4;
}
console.log(amigos.filter(filtrarAmigos));

//Corrigeme la frase

const frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];
//  var nuevo_array = arr.map(function () {
// Elemento devuelto de nuevo_array

let frasesConExclamacion = frases.map(function(exclamacion) {
    return "!" + exclamacion + "!";
});
console.log(frases)
console.log(frasesConExclamacion);