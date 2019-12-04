import React from "react";

export default class ItemForm extends React.Component {
  render() {
    return (
      <div className={`form-wrapper`}>
        <form className="form">
          <label htmlFor="title"> Title</label>
          <input
            required=""
            id="title"
            type="text"
            className="title_input"
            placeholder="Title"
            value=''
          />
          <label htmlFor="description"> Description</label>
          <input
            type="text"
            className="description_input"
            placeholder="Description"
            id="description"
            value=''
          />
          <label htmlFor="priority">Priority</label>
          <select
            className="change-priority"
            id="priority"
            value=''
          >
            <option value="normal">normal</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
          <div className="form__footer">
            <button
              type="button"
              className="cancel-btn btn"
            >
              Cancel
            </button>
            <button type="submit" className="button btn">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}
