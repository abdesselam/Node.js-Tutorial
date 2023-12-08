const printViveMove= async ()=>{
    const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/charmander');
    const response = await pokemon.json();
    console.log(response.abilities)
}
printViveMove()