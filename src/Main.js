import React, { Component } from 'react'
import CreateTask from './CreateTask'
import TaskList from './TaskList'

const tasks = []
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: tasks
        }
    }
    createTask = (task) => {
        if (task.trim() === '') {
            alert("task can't be empty")
            return
        }
        tasks.push({ task, isComplete: false })
        this.setState({
            tasks: tasks
        })
    }
    render() {
        return (
            <div>

                <CreateTask createTask={this.createTask} />
                <TaskList tasks={tasks} />
            </div>
        )
    }
}

export default Main