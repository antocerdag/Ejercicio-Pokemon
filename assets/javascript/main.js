function Pokemon(nombre,color,vida,poderDeAtaque,nivelDeAmistad){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = vida;
	this.poderDeAtaque = poderDeAtaque

	this.mostrarPokemon = function(){
		return("Hola, soy: " + this.nombre + " y soy de color: " + this.color);
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}
/*var Pikachu = new Pokemon("Pikachu","amarillo",120,100);
var Charmander = new Pokemon("Charmander","rojo",220,20);
var Squirtle = new Pokemon("Squirtle","azul",145,50);
var Bulbasaur = new Pokemon("Bulbasaur","verde",115,30);

var pokemon1 = document.getElementById('pokemon1').value;
var pokemon2 = document.getElementById('pokemon2').value;

var poke1 = pokemon1.options[pokemon1.selectedIndex].class;
var poke2 = pokemon2.options[pokemon2.selectedIndex].class;

function ataque(poke1,poke2){
 
}

Pikachu.atacar(Charmander);
console.log("Nivel de vida " + Charmander.vida);*/

function ataque(){
	var pokemon1 = document.getElementById('pokemon1').value;
	var pokemon2 = document.getElementById('pokemon2').value;

	var pelea1 = new Pokemon(pokemon1,"verde",20,100);
	var pelea2 = new Pokemon(pokemon2,"azul",30,220);

	if (pelea1.nombre == pelea2.nombre){
		
		alert("No puedes atacar al mismo Pokemón!");

	} else{

		pelea1.atacar(pelea2);

		var ring = document.getElementById("contenedorboton");

		var resultado = "<strong>" + pelea1.nombre + " atacó a " + pelea2.nombre + " y  "+ pelea2.nombre + " tiene " + pelea2.vida + " de vida restante." + "<br>"; 

		ring.innerHTML=resultado;
	}


}