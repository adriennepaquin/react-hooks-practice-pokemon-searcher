import React, { useState } from "react";

function Search(props) {

  // // const [searchTerm, setSearchTerm] = useState("")

  // const handleChange = (e) => {
  //   console.log(e.target.value)
  //   setSearchTerm(e.target.value)
  // }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input placeholder="search here..." className="prompt" value={props.searchTerm} onChange={props.handleSearchChange}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
