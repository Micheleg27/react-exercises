import React from "react";

export class ToDoList extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            items: [],
            value: '',
        }
    }

    // myTextInput = React.createRef()


    getInput = (event) => {

        this.setState(
            {value: event.target.value}
        )
    }

    addTodo = () => {
        this.setState(
            {items: [...this.state.items, this.state.value]},
        );

            // this.myTextInput.current.clear();

        this.setState(
            {value: ''}
        )
    }

    clearItems = () => {
        this.setState(
            {items: []}
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

                
                <input ref={this.myTextInput} type='text' onChange={this.getInput} value={this.state.value}></input>
                <button onClick={this.addTodo}>Add a task</button>
                <button onClick={this.clearItems}>Reset</button>
            </div>
        )
    }
}