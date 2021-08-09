import React, { useEffect } from "react";
import "./styles.css";
import Header from "./components/Header";
import InputField from "./components/InputField";
import TodosList from "./components/TodosList";
import { connect } from "react-redux";
import { deleteAll, persistTodos } from "./redux/action/addTodo.action";
import { Button } from 'react-bootstrap';

const App = ({deleteAll, persistTodos}) => {
  useEffect(() => {
    persistTodos();
  },[persistTodos]);
  return (
    <div className="App">
      <Header />
      <InputField />
      <TodosList />
      <div>
        <Button 
          variant="danger"
          style={{ 
            width: "100px",
            height: "40px",
            padding: "0",
            marginTop: "20px", 
            cursor: "pointer" }} 
            onClick={deleteAll}
          >
            Delete All
          </Button>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  deleteAll : () => dispatch(deleteAll()),
  persistTodos: () => dispatch(persistTodos())
})
export default connect(null, mapDispatchToProps)(App);