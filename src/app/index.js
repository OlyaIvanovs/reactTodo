var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

import TodoItem from './todoitem'
import AddItem from './additem'
import styles from './css/index.css'

class ToDoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['eat', 'sleep', 'pray'],
            btnMsg: "Add a new Todo"
        }
        this.addTodo = this.addTodo.bind(this)
        this.onDelete = this.onDelete.bind(this)
        this.onAdd = this.onAdd.bind(this)
    }

    addTodo() {
        this.setState(() => {
            return {btnMsg: "A new todo was added"}
        })
    }

    onAdd(item) {
        var updatedTodos = this.state.todos
        updatedTodos.push(item)
        this.setState(() => {
            return {
                todos: updatedTodos
            }
        })
    }

    onDelete(item) {
        var updatedTodos = this.state.todos.filter((todo, index) => {
            return todo !== item
        })
        this.setState(() => {
            return {todos: updatedTodos}
        })
    }

    render() {
        var todos = this.state.todos.map((todo, index) => {
            return (
                <TodoItem item={todo} key={index} onDelete={this.onDelete}/>
            )
        })
        return (
            <div id="todo-list">
                <button type="button" onClick={this.addTodo}>{this.state.btnMsg}</button>
                <h1>
                    You have to do
                </h1>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} />
            </div>
        )
    }
}


ReactDOM.render(
    <ToDoComponent />, 
    document.getElementById('todo-wrapper')
)