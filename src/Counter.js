import React from 'react';
import { CounterDisplay } from './CounterDisplay';

export class Counter extends React.Component {

    render() {
        return <h1> <CounterDisplay initialValue={5} /> </h1>
    }
}

// State02: Il parametro del SetState dev'essere una callback invece di un oggetto 
//poiché il valore di ritorno dipende dal valore dato in input