import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import Form from './components/Form';
import Tasks from './components/Tasks';

class ToDo extends React.Component {

    constructor() {
        super();
        this.state = {
            arrOfTasks: []
        }
    }


    addTask = task => {
        const tempArr = [...this.state.arrOfTasks, task];
        this.setState({
            arrOfTasks: tempArr
        })
    }

    finishTask = taskToFinish => {
        const tempArr = [...this.state.arrOfTasks]
        tempArr.forEach(task => {
            if (task.id == taskToFinish.id) {
                task.status = task.status == "finished" ? "open" : "finished"
            }
        })
        this.setState({
            arrOfTasks: tempArr
        })
    }

    render() {
        return (
            <main className="main-content">
                <Form addTask={this.addTask} />
                <Tasks tasks={this.state.arrOfTasks} finish={this.finishTask} />
            </main>
        )
    }
}


function App() {
    return <ToDo />
}

ReactDOM.render(<App />, document.getElementById('app'));