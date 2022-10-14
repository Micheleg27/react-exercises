import React from "react";

export class ToDoList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            items: [],
            value: '',
        }
    }


    getInput = (event) => {

        this.setState(
            {value: event.target.value}
        )
        
    }

    addTodo = () => {

        this.setState(
            {items: [...this.state.items, this.state.value]}
        )
    }
    
    render(){

        const ListItems = this.state.items.map((todo, index) => {
            return <li key={index}>{todo}</li>
        })

        return (
            <div>
                <ul>
                    {ListItems}
                </ul>

                <button onClick={this.addTodo}>Add a task</button>
                <input type='text' onChange={this.getInput}></input>
            </div>
        )
    }
}