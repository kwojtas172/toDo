import React from 'react';
import Task from './Task';

class Tasks extends React.Component {

    render() {
        return (
            <div className="list-tasks">
                {this.props.tasks.length > 0 && <h2>Task to do</h2>}
                <ul>
                    <Task tasks={this.props.tasks} finish={this.props.finish} delete={this.props.delete} />
                </ul>
            </div>
        )
    }
}

export default Tasks;