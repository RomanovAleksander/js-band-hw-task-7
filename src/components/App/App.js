import React from "react";
import { connect } from 'react-redux'
import Header from "../Header";
import Search from "../Search";
import ItemFilter from "../ItemFilter";
import TodoList from "../TodoList";
import Footer from "../Footer";
import ItemForm from "../ItemForm";
import { addTodo, removeTodo, updateTodo, VisibilityPriorityFilters } from '../../actions/index';

import "../../styles/styles.scss";

 class App extends React.Component {
  constructor() {
    super();
    this.setId = 1;
    this.state = {
      priority: "all",
      completed: "all",
      searchText: "",
      isFormOpen: false,
      item: null
    };
  }

  onSearchChange = searchText => {
    this.setState({ searchText });
  };

  onPriorityChange = priority => {
    this.setState({ priority });
  };

  onStatusChange = completed => {
    this.setState({ completed });
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
    // this.setState(({ todoData }) => {
    //   return {
    //     todoData: this.toggleProperty(todoData, id, "done", true)
    //   };
    // });
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

  filterByPriority(items, priority) {
    // switch (priority) {
    //   case "all":
    //     return items;
    //   case "high":
    //     return items.filter(item => item.priority === priority);
    //   case "normal":
    //     return items.filter(item => item.priority === priority);
    //   case "low":
    //     return items.filter(item => item.priority === priority);
    //   default:
    //     return items;
    // }

    switch (priority) {
      case VisibilityPriorityFilters.SHOW_ALL:
        return items;
      case  VisibilityPriorityFilters.SHOW_HIGH:
        return items.filter(item => item.priority === priority);
      case  VisibilityPriorityFilters.SHOW_NORMAL:
        return items.filter(item => item.priority === priority);
      case VisibilityPriorityFilters.SHOW_LOW:
        return items.filter(item => item.priority === priority);
      default:
        return items;
    }
  }

  filterByCompleted(items, completed) {
    switch (completed) {
      case "all":
        return items;
      case "done":
        return items.filter(item => item.done);
      case "open":
        return items.filter(item => !item.done);
      default:
        return items;
    }
  }

  search(items, searchText) {
    // if (searchText === 0) {
    //   return items;
    // }
    // return items.filter(item => {
    //   return item.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    // });
  }

  render() {
    const {
      searchText,
      priority,
      completed,
      isFormOpen,
      item
    } = this.state;

    const { todos } = this.props;

        const visibleBySearchAndPriority = this.filterByPriority(
      this.search(todos, searchText),
      priority
    );
    // const visibleItems = this.filterByCompleted(
    //   visibleBySearchAndPriority,
    //   completed
    // );

    const visibleItems = todos;

    return (
      <div className="wrapper">
        <Header />
        <main className="content">

          <div className="filter">
            <Search onSearchChange={this.onSearchChange} />
            <ItemFilter
              priority={priority}
              completed={completed}
              onPriorityChange={this.onPriorityChange}
              onStatusChange={this.onStatusChange}
              openForm={this.openForm}
            />
          </div>
          <TodoList
            todos={visibleItems}
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
  todos: state.todos
});

export default connect(mapStateToProps)(App);