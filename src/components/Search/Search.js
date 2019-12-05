import React, { Component } from "react";
import "./search.css";

export default class Search extends Component {

  onSearchChange = ({ target }) => {
    this.props.onSearchChange(target.value);
  };

  render() {
    const { searchText } = this.props;

    return (
      <div className="filter__item">
        <input
          type="search"
          className="filter__search"
          placeholder="search by title"
          onChange={this.onSearchChange}
          value={searchText}
        />
      </div>
    );
  }
}
