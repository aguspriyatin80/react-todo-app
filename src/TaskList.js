import React, { Component } from 'react'
import TaskItem from './TaskItem'

export default class TaskList extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <th>Tasks</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {this.props.tasks.map((task, index) => (
                            <TaskItem key={index} taskItem={task} id={index} deleteTask={this.props.deleteTask} />
                        ))}

                    </tbody>
                </table>
            </div>
        )
    }
}
