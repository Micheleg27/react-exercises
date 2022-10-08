import React from "react";

export class CounterDisplay extends React.Component {
    
    state = {
        count: this.props.initialValue,
    }

    constructor(props) {
        super(props);
        

        setInterval(() => {
            this.setState((state) => {
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

// State05: 