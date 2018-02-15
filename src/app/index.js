var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <li>
                <div className="todo-item">
                    <span className="todo-name">{this.props.item}</span>
                </div>
            </li>
        )
    }
}

class ToDoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['eat', 'sleep', 'pray']
        }
    }

    render() {
        var todos = this.state.todos.map((todo, index) => {
            return (
                // <li key={index}>{todo}</li>
                <TodoItem item={todo} key={index}/>
            )
        })
        return (
            <div>
                <h1>
                    You have to do
                </h1>
                <ul>{todos}</ul>
            </div>
        )
    }
}


ReactDOM.render(
    <ToDoComponent />, 
    document.getElementById('todo-wrapper')
)