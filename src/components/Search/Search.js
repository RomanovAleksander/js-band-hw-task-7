import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div className="filter__item">
        <input
          type="search"
          className="filter__search"
          placeholder="search by title"
          value=''
        />
      </div>
    );
  }
}
