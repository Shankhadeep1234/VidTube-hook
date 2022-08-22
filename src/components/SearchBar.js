import React, { useState } from "react";

const SearchBar = ({ onFormTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    onFormTermSubmit(term);
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input onChange={onInputChange} value={term} type="text" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
