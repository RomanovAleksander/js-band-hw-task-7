import React from "react";
import { connect } from 'react-redux'
import Header from "../Header";
import Search from "../Search";
import ItemFilter from "../ItemFilter";
import TodoList from "../TodoList";
import Footer from "../Footer";
import ItemForm from "../ItemForm";
import {
  addTodo,
  removeTodo,
  updateTodo,
  toggleTodo,
  filterByPriority,
  filterByDone,
  searchTodo,
  searchInTodos,
  priorityInTodos,
  doneInTodos
} from '../../actions/index';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isFormOpen: false,
      item: null
    };
  }

  onSearchChange = searchText => {
    this.props.dispatch(searchTodo(searchText));
    this.props.dispatch(searchInTodos(this.props.todos, searchText));
  };

  onPriorityChange = priority => {
    this.props.dispatch(filterByPriority(priority));
    this.props.dispatch(priorityInTodos(this.props.todos, priority));
  };

  onStatusChange = completed => {
    this.props.dispatch(filterByDone(completed));
    this.props.dispatch(doneInTodos(this.props.todos, completed));
  };

  openForm = () => {
    this.setState({ isFormOpen: true });
  };

  closeForm = () => {
    this.setState({ isFormOpen: false, item: null });
  };

  toggleProperty = (arr, id, propName, closeMenu) => {
    const isClose = closeMenu ? false : true;
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName],
      'showMenu': isClose
    };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleDone = id => {
    this.props.dispatch(toggleTodo(id));
  };

  onToggleOpen = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "showMenu", false)
      };
    });
  };

  findItem = id => {
    return this.props.todos.find(el => el.id === id);
  };

  onEdit = id => {
    const item = this.findItem(id);
    this.openForm();
    this.setState({ item });
  };

  deleteItem = id => {
    this.props.dispatch(removeTodo(id))
  };

  addItem = ({ text, description, priority }) => {
    this.props.dispatch(addTodo(text, description, priority))
  };

  updateItem = ({ text, description, priority, id }) => {
    this.props.dispatch(updateTodo(text, description, priority, id))
  };

  render() {
    const {
      isFormOpen,
      item
    } = this.state;

    const { filterPriority, filterDone, searchText, visibleTodos } = this.props;

    return (
      <div className="wrapper">
        <Header />
        <main className="content">
          <div className="filter">
            <Search onSearchChange={this.onSearchChange} searchText={searchText} />
            <ItemFilter
              priority={filterPriority}
              completed={filterDone}
              onPriorityChange={this.onPriorityChange}
              onStatusChange={this.onStatusChange}
              openForm={this.openForm}
            />
          </div>
          <TodoList
            todos={visibleTodos}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleOpen={this.onToggleOpen}
            onToggleEdit={this.onEdit}
          />
          {isFormOpen && (
            <ItemForm
              todo={item}
              isFormOpen={isFormOpen}
              closeForm={this.closeForm}
              onAdded={this.addItem}
              onUpdated={this.updateItem}
            />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
  filterPriority: state.filterByPriority,
  filterDone: state.filterDone,
  searchText: state.searchText,
  visibleTodos: state.visibleTodos
});

export default connect(mapStateToProps)(App);
