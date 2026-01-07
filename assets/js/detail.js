let pokemonNumber = 1;
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`




function convertPokemonDetailtoHtml(pokeDetail) {

    return `<li class="pokemon ${pokeDetail.types[0].type.name}">
        <div class="name-number">
            <span class="name">${pokeDetail.name}</span>    
            <span class="number">${pokeDetail.id}</span>
        </div>
                 <ol class="types">
                     ${pokeDetail.types.map((type) => `<li class="type ${type.type.name}">${type.type.name}</li>`).join('')}
                 </ol>

        <div class="detail">
                    <img src="${pokeDetail.sprites.other.dream_world.front_default}" alt="${pokeDetail.name}">
        </div>
        </li>
        <ol class="menuDetails">
            <li>About</li>
            <li>Base Stats</li>
            <li>Evolution</li>
            <li>Moves</li>
        </ol>
        <ol class="menuAbout">
            <li class="item-lista"><div class="coluna-fixa">Species</div><div class="coluna-variavel">${pokeDetail.species.name}</div></li>
            <li class="item-lista"><div class="coluna-fixa">Height</div><div class="coluna-variavel">${pokeDetail.height}</div></li>
            <li class="item-lista"><div class="coluna-fixa">Weight</div><div class="coluna-variavel">${pokeDetail.weight}</div></li>
            <li class="item-lista"><div class="coluna-fixa">Weight</div><div class="coluna-variavel">${pokeDetail.stats[0].base_stat}</div></li>
            <li class="item-lista"><div class="coluna-fixa">Abilities</div><div class="coluna-variavel">${pokeDetail.abilities.map(ability => ability.ability.name).join(', ')}</div></li>
        </ol>
        
            `
    const hp = pokeDetail.stats[0].base_stat;
    const attack = pokeDetail.stats[1].base_stat;
    const defense = pokeDetail.stats[2].base_stat;
    const specialAttack = pokeDetail.stats[3].base_stat;
    const specialDefense = pokeDetail.stats[4].base_stat;
    const speed = pokeDetail.stats[5].base_stat;
}


const pokemonDetailHTML = document.getElementById('pokemonOlDetail');


fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {

        console.log(jsonBody)
        const pokeDetail = jsonBody

        pokemonDetailHTML.innerHTML += convertPokemonDetailtoHtml(pokeDetail)
    })
    .catch((error) => console.error(error))