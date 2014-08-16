//Asignación por referencia

function pokemon(nombrePokemon, vidaPoke, ataPoke)
{
	var estructuraPokemon =
	{
		nombre: nombrePokemon,
		vida: vidaPoke,
		ataque: ataPoke
		datos: {tipo:"Tierra", debilidad: "Fuego" }
	};
	return estructuraPokemon;
}

var pikachu = Pokemon("Pikachu", 100, 55);
var bulbasaur = Pokemon("Bulbasaur", 90, 50);

console.log(bulbasaur);
