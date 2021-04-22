import React from 'react'
import s from './home.module.css'
import pokemonNotFound from '../resources/pokemonNotFound.png'
import startNow from '../resources/startNow.png'

export default function home({searchedPokemon, searched}) {

  const {id, sprites, name, types, base_experience, height, weight, moves} = searchedPokemon;

  return (
    <div className={s.home}>
      {id?
        <div className={s.notFound}>
          <h2 className={s.title}>{name}</h2>
          <div>
            <img src={sprites.other.dream_world.front_default} alt="" className={s.image}/>
            <div>
              <h3>Experiencia base: {base_experience}</h3>
              <h3>Altura: {height}</h3>
              <h3>Peso: {weight}</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item active">Tipo: </li>
                  {types.map(t => <li class="list-group-item">{t.type.name}</li>)}
                </ul>
              <ul class="list-group list-group-flush">
                <li class="list-group-item active">Habilidades: </li>
                {moves.map(m => <li class="list-group-item">{m.move.name}</li>)}
              </ul>
            </div>
          </div>
        </div>
      :
      <div>
        { searchedPokemon.results?
        <div className={s.notFound}>
          <h2>¡Atrapalos ya!</h2>
          <p>Comenzá haciendo una búsqueda</p>
          <img src={startNow} alt="" className={s.notFoundImg}/>
        </div> 
        :
        <div className={s.notFound}>
          <h2>Ups! Este pokémon no existe</h2>
          <img src={pokemonNotFound} alt="" className={s.notFoundImg}/>
        </div>
      }
      </div>
      }
    </div>
  )
}
