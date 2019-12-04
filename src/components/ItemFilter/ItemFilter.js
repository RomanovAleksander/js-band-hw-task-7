import React, { Component } from "react";

export default class ItemFilter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="filter__item">
          <select
            className="select-status select"
            key="status"
            value=''
          >
            <option value="all">all</option>
            <option value="open">open</option>
            <option value="done">done</option>
          </select>
        </div>
        <div className="filter__item">
          <select
            className="select-priority select"
            key="priority"
            value=''
          >
            <option value="all">all</option>
            <option value="high">high</option>
            <option value="normal"> normal</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="filter__item">
          <button
            className="filter__create-btn btn"
            type="button"
          >
            Create
          </button>
        </div>
      </React.Fragment>
    );
  }
}
