import React from 'react';
import { CounterDisplay } from './CounterDisplay';

export class Counter extends React.Component {

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

                // STATE05:
                // return {
                //     count: state.count > this.props.initialValue * 10 ? state.count = this.props.initialValue : state.count + (this.props.incrementBy)
                // }

                return {
                    count: state.count + (this.props.incrementBy)
                }
            })
        }, this.props.timeout)
    }

    render() {
        return <h1> <CounterDisplay count={this.state.count}/> </h1>
    }
}

Counter.defaultProps = {
    initialValue: 0,
    incrementBy: 1,
    timeout: 1000
}


// State02: Il parametro del SetState dev'essere una callback invece di un oggetto 
//poiché il valore di ritorno dipende dal valore dato in input