import React from 'react';

export class Counter extends React.Component {
    state = {
        count: 0
    }

    constructor(props) {
        super(props);

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + 1
                }
            })
        }, 1000)
    }



    render() {
        return <h1>Count: {this.state.count}</h1>
    }
}

// State02: Il parametro del SetState dev'essere una callback invece di un oggetto 
//poiché il valore di ritorno dipende dal valore dato in input