import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

class ToDo extends React.Component {

    render() {
        return (
            <h1>To Do App</h1>
        )
    }
}


function App() {
    return <ToDo />
}

ReactDOM.render(<App />, document.getElementById('app'));