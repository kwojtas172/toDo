import React from 'react';

class Task extends React.Component {


    handleClick = e => {
        e.preventDefault();
        this.props.tasks.forEach(task => {
            if (task.id == e.target.id) {
                this.props.finish(task)
            }
        })
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.tasks.forEach(task => {
            if (task.title == e.target.name) {
                this.props.delete(task)
            }
        })
    }

    render() {
        return (
            this.props.tasks.map(task => {
                return <li className={task.status == "finished" ? "open-task finished" : "open-task"} key={task.id}><span><p>{task.title}</p><p>{task.description}</p></span><button id={task.id} onClick={this.handleClick} className="btn-finish">{task.status == "finished" ? "Undo" : "Finish"}</button> {task.status == "finished" && <button className="btn-delete" onClick={this.handleDelete} name={task.title}>Delete</button>} </li>
            })
        )
    }
}


export default Task;