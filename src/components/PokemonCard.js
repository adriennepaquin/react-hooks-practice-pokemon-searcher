import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {
  
  const [frontImage, setFrontImage] = useState(true)

  // function handleClick OR
  const handleClick = (e) => {
    setFrontImage(prevState => !prevState)
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={frontImage ? props.sprites.front : props.sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{props.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {props.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
