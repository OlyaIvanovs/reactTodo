import React from 'react'
import styles from './css/additem.css'

class AddItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value)
        this.refs.newItem.value = ""
    }

    render() {
        return (
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required placeholder="Add a new todo" ref="newItem" />
                <input type="submit" value="Hit me"/>
            </form>
        )
    }
}

export default AddItem