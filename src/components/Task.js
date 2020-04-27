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

    render() {
        return (
            this.props.tasks.map(task => {
                return <li className={task.status == "finished" ? "open-task finished" : "open-task"} key={task.id}><span><p>{task.title}</p><p>{task.description}</p></span><button id={task.id} onClick={this.handleClick} className="btn-finish">{task.status == "finished" ? "Cofnij" : "Zakończ"}</button></li>
            })
        )
    }
}


export default Task;