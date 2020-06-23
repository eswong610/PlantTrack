import React, { Component } from 'react'

class TodoItem extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                <img src=''></img>
                <p>{this.props.plantType}</p>
                <p>last watered: May 4, 2020</p>
            </div>
        )
    }
}

export default TodoItem
