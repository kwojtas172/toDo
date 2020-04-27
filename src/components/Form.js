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
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit} className="form-content">
                <h2>Utwórz zadanie</h2>
                <input type="text" onChange={this.handleChangeTitle} placeholder="Tytuł"></input>
                <input type="text" onChange={this.handleChangeDesciption} placeholder="Opis"></input>
                <button className="btn-add">Dodaj</button>
            </form>
        )
    }

}

export default Form;