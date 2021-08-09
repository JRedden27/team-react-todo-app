import React from "react";
import { connect } from "react-redux";
import { deleteTodo, editTodo } from "../redux/action/addTodo.action";
import { Card } from 'react-bootstrap';

const Todo = ({ todo, idx, deleteTodo, editTodo, selected, text }) => {
    return(
        <Card 
            style={{ 
                display: "flex",   
                flexDirection: "row", 
                justifyContent: "space-between", 
                border: "1px solid #ffffffa6",
                padding: "5px",
                margin: "5px",
                backgroundColor: "#ffffff",
                color: "black",
                borderRadius: "12.5px",
                borderStyle: "solid",
                borderColor: "green",
                borderWidth: "5px",
                width: "99%",
                minHeight: "125px"
            }}
        >
            <Card.Body>
                <Card.Title style={{ fontWeight: "800", fontSize: "18px" }}>To-Do:</Card.Title>
                <Card.Text>
                    {
                        selected === idx ?
                        text
                        :
                        todo
                    }
                </Card.Text>
            </Card.Body>
            <div style={{ margin: "10px 5px" }}>
                {/* <i className="bi bi-check-lg" style={{ cursor: "pointer", display: "block" }} ></i>
                <i className="bi bi-exclamation-circle-fill" style={{ cursor: "pointer", display: "block" }} ></i> */}
                <i className="bi bi-pencil-fill" style={{ cursor: "pointer", display: "block" }} onClick={() => editTodo(idx)}></i>
                <i className="bi bi-trash-fill" style={{ cursor: "pointer", display: "block" }} onClick={() => deleteTodo(idx)} ></i>
            </div>
        </Card>
    )
};

const mapDispatchToProps = dispatch => ({
    deleteTodo: key => dispatch(deleteTodo(key)),
    editTodo: key => dispatch(editTodo(key))
});

const mapStateToProps = ({text, selected}) => ({
    text,
    selected
})
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Todo);