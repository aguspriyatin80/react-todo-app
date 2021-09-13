import React, { Component } from 'react'
import TaskList from './TaskList'

export default class TaskItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: this.props.taskItem.task,
            isEditing: false
        }
    }
    setEditingState = (isEditing) => {
        this.setState({ isEditing: isEditing })
    }
    handleChange = (event) => {
        this.setState({ task: event.target.value })
    }
    deleteTask = () => {
        this.props.deleteTask(this.props.id)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editTask(this.props.id, this.state.task)
        this.setState({ isEditing: false })
    }
    render() {

        return (
            <tr>{this.state.isEditing ?
                <>
                    <td>
                        <form onSubmit={this.handleSubmit}>
                            <input value={this.state.task}
                                onChange={this.handleChange}
                                autoFocus />
                        </form>
                    </td>
                    <td>
                        <button onClick={this.handleSubmit} type="submit">Save</button>
                        <button onClick={() => this.setEditingState(false)} type="button">Back</button>
                    </td>
                </>
                :
                <>
                    <td>{this.props.taskItem.task}</td>
                    <td>
                        <button onClick={() => this.setEditingState(true)}>Edit</button>
                        <button onClick={this.deleteTask}>Delete</button>
                    </td>
                </>
            }

            </tr>

        )
    }
}
