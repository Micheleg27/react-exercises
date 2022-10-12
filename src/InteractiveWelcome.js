import React from "react";
import { Welcome } from './Welcome'

export class InteraciveWelcome extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            value: '',
        }
        
        // const HandleName = (event) => {
        //     return this.state.value = event.target.value
        // }
        // Nel costruttore non potrò usare il setState avendo già la possibilità di accedere
        // e cambiare il valore della proprietà. Al di fuori di questo tale operazione
        // può essere effettuata tramite il metodo setState

    }

        HandleName = (event) => {
            this.setState(() => {
                return {value: event.target.value}
            })
        }

    render(){
        return (<div>
                <input onChange={this.HandleName}></input>
                <Welcome name={this.state.value}/>
        </div>)
    }
}