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

    handleReset = () => {
        this.setState(() => {
            return {
                nome: '',
                key: '',
                remember: true,
                disable: true,
            }
        })
    }

    // Il setState dell'Handlereset non ha bisogno di un parametro State in quanto le modifiche applicate da quest'ultimo alle proprietà 
    // non dipendono dal valore iniziale delle proprietà stesse (a prescindere da ciò che avrò negli input, il valore tornerà ai settaggi predefiniti, quindi con gli input vuoti)

    render(){
        return (
            <form>
                <input type='text' name='nome' value={this.state.nome} onChange={this.handleInput}></input>
                <input type='password' name='key' value={this.state.key} onChange={this.handleInput} ></input>
                <input type='checkbox' name='remember' checked={this.state.remember} onChange={this.handleInput}></input>

                <button name='login' type='button' disabled={!this.state.nome || !this.state.key} onClick={this.handleLogin}>LOGIN</button>
                <button name='reset' type='button' onClick={this.handleReset}>CLEAR</button>
            </form>
        )
    }
}
// !this.state.nome || !this.state.key indica una condizione in cui almeno una delle due espressioni è vera (almeno uno dei due campi è vuoto)
// 

Login.defaultProps = {
    onLogin: () =>{console.error('Login function does not exist!')}
}