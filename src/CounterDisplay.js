import React from "react";

export class CounterDisplay extends React.Component {
    
    state = {
        count: this.props.initialValue,
    }

    constructor(props) {
        super(props);
        

        setInterval(() => {
            this.setState((state) => {
                // STATE05: 
                // if(state.count > this.props.initialValue * 10){
                //     state.count = this.props.initialValue;
                // }

                return {
                    count: state.count + (this.props.incrementBy)
                }
            })
        }, this.props.timeout)
    }



    render() {
        return <h1>Count: {this.state.count}</h1>
    }
    
}

CounterDisplay.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
    timeout: 1000,
}