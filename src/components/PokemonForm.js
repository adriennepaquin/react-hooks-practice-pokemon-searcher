import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addToPokeList }) {
  // or create formData, setFormData object
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")

  //const handleFront = (e) => {
  //   setFront(e.target.value)
  // }

  // const handleHp = (e} => {
  //   let num = parseInt(e.target.value)
  //   if (typeof e.target.value !== "number") {
  //     return ERROR
  //   }
  // })

  const handleSubmit = () => {
    let data = {
      name: name,
      hp: parseInt(hp),
      sprites: {
        front: front,
        back: back
      }
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => addToPokeList(data))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid 
            label="Name" 
            placeholder="Name" 
            value={name} 
            name="name"
            onChange={(e) => setName(e.target.value)}
            />
          <Form.Input fluid
            label="hp"
            placeholder="hp"
            value={hp}
            name="hp"
            onChange={(e) => setHp(e.target.value)}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={front}
            onChange={(e) => setFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
