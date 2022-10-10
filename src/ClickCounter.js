import React from "react";
import { CounterButton } from "./Counterbutton";

export class ClickCounter extends React.Component {

    state = {
        count: 0
    }

    // constructor(props){
    //     super(props)


    // }

     clickCount = () => {
        this.setState((state) => {
            return {count: state.count + 1}
        })
    }

    render(){
        return <div>
                    <CounterButton clickCount={this.clickCount} />
                    <h1>Count: {this.state.count}</h1>
                </div>
    }
}