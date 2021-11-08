import React from "react"
import Layout from '../components/layout'
import { Link, useStaticQuery, graphql } from "gatsby"

export default function AllPokemon({ pageContext: { allPokemon } }) {

  return (
  <Layout pageTitle="Starter Pokemon!">
    <div>
        <ul>
        {allPokemon.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
	
	</Layout>
  )
}

