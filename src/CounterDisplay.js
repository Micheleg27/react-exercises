import React from "react";

export class CounterDisplay extends React.Component {
    render() {
        return <p>Count: {this.props.count}</p>
    }

}