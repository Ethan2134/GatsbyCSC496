const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWpPost.edges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })
}

//The pokemon section, wordpress stops working if uncomment this
let starters = [1, 4, 7, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656]
const axios = require("axios")
const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)
const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`)
      return { ...pokemon }
    })
  )
let allPokes = []
// All Hoenn Pokemon
for(let i = 252; i < 387; i++){
	allPokes.push(i);
}
exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(starters)
  createPage({
    path: `/pokemon`,
    component: require.resolve("./src/templates/all-pokemon.js"),
    context: { allPokemon },
  })
  //page 1, no prev
let pokesToGet = await getPokemonData(allPokes.slice(0, 16))
next = "/pokemon/2";
prev = "/pokemon/1";
  createPage({
    path: `/pokemon/1`,
    component: require.resolve("./src/templates/pokemonIndex.js"),
    context: { pokesToGet, next, prev },
  })

pokesToGet = await getPokemonData(allPokes.slice(16, 32))
next = "/pokemon/3";
prev = "/pokemon/1";
  createPage({
    path: `/pokemon/2`,
    component: require.resolve("./src/templates/pokemonIndex.js"),
    context: { pokesToGet, next, prev },
  })
  pokesToGet = await getPokemonData(allPokes.slice(32, 48))
next = "/pokemon/4";
prev = "/pokemon/2";
  createPage({
    path: `/pokemon/3`,
    component: require.resolve("./src/templates/pokemonIndex.js"),
    context: { pokesToGet, next, prev },
  })
  pokesToGet = await getPokemonData(allPokes.slice(48, 64))
next = "/pokemon/5";
prev = "/pokemon/3";
  createPage({
    path: `/pokemon/4`,
    component: require.resolve("./src/templates/pokemonIndex.js"),
    context: { pokesToGet, next, prev },
  })
 
  pokesToGet = await getPokemonData(allPokes.slice(64, 80))
next = "/pokemon/6";
prev = "/pokemon/4";
  createPage({
    path: `/pokemon/5`,
    component: require.resolve("./src/templates/pokemonIndex.js"),
    context: { pokesToGet, next, prev },
  })
  pokesToGet = await getPokemonData(allPokes.slice(80, 96))
next = "/pokemon/7";
prev = "/pokemon/5";
  createPage({
    path: `/pokemon/6`,
    component: require.resolve("./src/templates/pokemonIndex.js"),
    context: { pokesToGet, next, prev },
  })
  pokesToGet = await getPokemonData(allPokes.slice(96, 112))
next = "/pokemon/8";
prev = "/pokemon/6";
  createPage({
    path: `/pokemon/7`,
    component: require.resolve("./src/templates/pokemonIndex.js"),
    context: { pokesToGet, next, prev },
  })
  pokesToGet = await getPokemonData(allPokes.slice(112, 128))
next = "/pokemon/9";
prev = "/pokemon/7";
  createPage({
    path: `/pokemon/8`,
    component: require.resolve("./src/templates/pokemonIndex.js"),
    context: { pokesToGet, next, prev },
  })
  //last page, no next
  pokesToGet = await getPokemonData(allPokes.slice(128, 144))
next = "/pokemon/9";
prev = "/pokemon/8";
  createPage({
    path: `/pokemon/9`,
    component: require.resolve("./src/templates/pokemonIndex.js"),
    context: { pokesToGet, next, prev },
  })
}
