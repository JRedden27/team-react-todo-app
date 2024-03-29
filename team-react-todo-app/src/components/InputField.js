import React from 'react';
import { connect } from "react-redux";
import { addText, addTodo, editAddTodo } from "../redux/action/addTodo.action";

class InputField extends React.Component {
    
    handleChange = e => this.props.addText(e.target.value);
    handleSubmit = e => {
        e.preventDefault();
        if(this.props.selected || this.props.selected === 0)
            this.props.editAddTodo({
                value:this.props.text, 
                selected:this.props.selected
            });
        else this.props.addTodo(this.props.text);
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="todo" 
                    value={this.props.text}
                    placeholder="Enter your to-do..." 
                    style={{ width: "400px", margin: "25px 0" }}
                    onChange= {this.handleChange}
                />
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addTodo : todo => dispatch(addTodo(todo)),
    addText : value => dispatch(addText(value)),
    editAddTodo : obj => dispatch(editAddTodo(obj))
})
const mapStateToProps = state => ({
    text: state.text,
    selected:state.selected
})
export default connect( 
    mapStateToProps,
    mapDispatchToProps
)(InputField);
