import React from "react";

export class ToDoList extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            items: [],
            value: '',
            liValue: ''
        }
    }


    getInput = (event) => {
        event.preventDefault()

        this.setState(
            {value: event.target.value}
        )
    }

    addTodo = () => {
        this.setState(
            {items: [...this.state.items, this.state.value]},
        );

        this.setState(
            {value: ''}
        )
    }

    clearItems = () => {

        this.setState(
            {items: []}
        )
    }

    removeListItem = (index) => {

            const newArr = [...this.state.items]
            newArr.splice(index, 1)

            this.setState(
                {items: newArr}
            )
    }
    

    render(){

        return (
            <div>

                {this.props.render(this.state.items, this.removeListItem)}

                <input type='text' onChange={this.getInput} value={this.state.value}></input>
                <button onClick={this.addTodo}>Add a task</button>
                <button onClick={this.clearItems}>Reset</button>
            </div>
        )
    }
}