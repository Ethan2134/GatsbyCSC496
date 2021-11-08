import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

export default function PokemonPages({ pageContext: { pokesToGet, next, prev } }) {
	return (
		<Layout>
			<div>
				<ul>
					<h1>Page:</h1>
					<p>
						<Link to={prev}>Previous</Link>&emsp;
						<Link to="/pokemon/1/">1</Link>&emsp;
						<Link to="/pokemon/2/">2</Link>&emsp;
						<Link to="/pokemon/3/">3</Link>&emsp;
						<Link to="/pokemon/4/">4</Link>&emsp;
						<Link to="/pokemon/5/">5</Link>&emsp;
						<Link to="/pokemon/6/">6</Link>&emsp;
						<Link to="/pokemon/7/">7</Link>&emsp;
						<Link to="/pokemon/8/">8</Link>&emsp;
						<Link to="/pokemon/9/">9</Link>&emsp;
						<Link to={next}>Next</Link>&emsp;
					</p>
					{pokesToGet.map(pokemon => (
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