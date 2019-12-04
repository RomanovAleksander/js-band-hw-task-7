import React from "react";

import Header from "../Header";
import Search from "../Search";
import ItemFilter from "../ItemFilter";
import TodoList from "../TodoList";
import Footer from "../Footer";
import ItemForm from "../ItemForm";

export default function App() {
    return (
      <div className="wrapper">
        <Header />
        <main className="content">
          <div className="filter">
            <Search />
            <ItemFilter />
          </div>
          <TodoList />
        </main>
        <Footer />
      </div>
    );
}
