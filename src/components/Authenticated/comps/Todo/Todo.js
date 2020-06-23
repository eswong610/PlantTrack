import React, { Component } from 'react'
import styles from './todo.module.css'
import TodoItem from '../TodoItem/TodoItem'

class Todo extends Component {
    constructor(props){
        super(props);
        let d = new Date();
        this.state={
            date: (Date())
        }
    }

    getTodoItems = () => {
        
    }
    render() {
        return (
            <div className={styles.root}>
                <h3>Which plants to water today</h3>
                <p>{this.state.date}</p>
                <div className={styles.itemlist}>
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </div>
            </div>
        )
    }
}

export default Todo
