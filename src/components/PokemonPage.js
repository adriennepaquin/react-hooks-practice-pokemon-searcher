import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokeList, setPokeList] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearchChange = (e) => {
    //console.log(e.target.value)
    setSearchTerm(e.target.value)
  }

  const addToPokeList = (pokeObj) => {
    let newArray = [...pokeList, pokeObj]
    setPokeList(newArray)
  }

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(data => setPokeList(data))
  }, [])

  //console.log(pokeList)
  // const filteredList = () => {
  //   return pokeList.filter(pokemon => pokemon.name.includes(searchTerm) )
  // } OR
  const filteredList = pokeList.filter(pokemon => pokemon.name.includes(searchTerm))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addToPokeList={addToPokeList}/>
      <br />
      <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
      <br />
      <PokemonCollection pokeList={filteredList}/>
    </Container>
  );
}

export default PokemonPage;
