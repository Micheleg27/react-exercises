import React from "react";

export class Login extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            nome: '',
            key: '',
            remember: true,
        }

    }

    handleInput = (event) => {
        const status = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        const name = event.target.name

        this.setState(() => {
           return {[name] : status}
        })
    }

    render(){
        return (
            <form>
                <input type='text' name='nome' value={this.state.nome} onChange={this.handleInput}></input>
                <input type='password' name='key' value={this.state.key} onChange={this.handleInput} ></input>
                <input type='checkbox' name='remember' checked={this.state.remember} onChange={this.handleInput}></input>
            </form>
        )
    }
}