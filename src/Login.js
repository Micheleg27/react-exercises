import React from "react";

export class Login extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            nome: '',
            key: '',
            remember: true,
            disable: true,
        }

    }

    handleInput = (event) => {
        const status = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        const name = event.target.name

        this.setState(() => {
           return {[name] : status}
        })
    }

    handleLogin = () => {
        this.props.onLogin(this.state)
    }

    render(){
        return (
            <form>
                <input type='text' name='nome' value={this.state.nome} onChange={this.handleInput}></input>
                <input type='password' name='key' value={this.state.key} onChange={this.handleInput} ></input>
                <input type='checkbox' name='remember' checked={this.state.remember} onChange={this.handleInput}></input>

                <button name='login' type='button' disabled={!this.state.nome || !this.state.key} onClick={this.handleLogin}>LOGIN</button>
            </form>
        )
    }
}

Login.defaultProps = {
    onLogin: () =>{console.error('Login function does not exist!')}
}