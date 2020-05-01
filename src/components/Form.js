import React from 'react';
import ReactDOM from 'react-dom';
import nextId from "react-id-generator";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
    }

    handleChangeTitle = e => {
        this.setState({
            title: e.target.value
        })
    }

    handleChangeDesciption = e => {
        this.setState({
            description: e.target.value
        })
    }

    handleOnSubmit = e => {
        e.preventDefault();
        const task = { title: this.state.title, description: this.state.description, status: "open", id: nextId() };
        this.props.addTask(task);
        this.setState({
            title: "",
            description: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className="form-content">
                <h2>Create Task</h2>
                <input type="text" onChange={this.handleChangeTitle} placeholder="Title" value={this.state.title}></input>
                <input type="text" onChange={this.handleChangeDesciption} placeholder="Description" value={this.state.description}></input>
                <button className="btn-add">Add</button>
            </form>
        )
    }

}

export default Form;