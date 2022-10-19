import { useState } from "react";

export function Login () {

    const [data, setForm] = useState({
        username: '',
        password: '',
        remember: false
    })

    function handleLoginChange(event) {
        const {name, type, value, checked} = event.target

        setForm((data) => {
            return {
            ...data,

            [name]: type === 'checkbox' ? checked : value
        }
    })
}

    function resetInput() {
        setForm(() => {
            return {
                username: '',
                password: '',
                remember: false
            }
        })
    }

    console.log(data)

    return (
            <form>
                <input onChange={handleLoginChange} value={data.username} name='username'></input>
                <input onChange={handleLoginChange} value={data.password} type='password' name='password'></input>
                <input onChange={handleLoginChange} checked={data.remember} type='checkbox' name='remember'></input>

                <button disabled={!data.username || !data.password}>Login</button>
                <button onClick={resetInput}>Reset</button>
            </form>
    ) 
}



// CLASS COMPONENT LOGIN:



// import React from "react";

// export class Login extends React.Component {

//     constructor(props){
//         super(props)

//         this.state = {
//             nome: '',
//             key: '',
//             remember: true,
//             disable: true,
//         }

//     }

//     handleInput = (event) => {
//         const status = event.target.type === 'checkbox' ? event.target.checked : event.target.value
//         const name = event.target.name

//         this.setState(() => {
//            return {[name] : status}
//         })
//     }

//     handleLogin = () => {
//         this.props.onLogin(this.state)
//     }

//     handleReset = () => {
//         this.setState(() => {
//             return {
//                 nome: '',
//                 key: '',
//                 remember: true,
//                 disable: true,
//             }
//         })
//     }

    // Il setState dell'Handlereset non ha bisogno di un parametro State in quanto le modifiche applicate da quest'ultimo alle proprietà 
    // non dipendono dal valore iniziale delle proprietà stesse (a prescindere da ciò che avrò negli input, il valore tornerà ai settaggi predefiniti, quindi con gli input vuoti)

//     render(){

//         const PassColor = {
//             backgroundColor: this.state.key.length < 8 ? 'red' : 'green'
//         }

//         return (
//             <form>
//                 <input type='text' name='nome' value={this.state.nome} onChange={this.handleInput}></input>
//                 <input type='password' name='key' value={this.state.key} onChange={this.handleInput} ></input>
//                 <input type='checkbox' name='remember' checked={this.state.remember} onChange={this.handleInput}></input>

//                 <button name='login' type='button' disabled={!this.state.nome || !this.state.key} onClick={this.handleLogin} style={PassColor}>LOGIN</button>
//                 <button name='reset' type='button' onClick={this.handleReset}>CLEAR</button>
//             </form>
//         )
//     }
// }
// !this.state.nome || !this.state.key indica una condizione in cui almeno una delle due espressioni è vera (almeno uno dei due campi è vuoto)
// 

// Login.defaultProps = {
//     onLogin: () =>{console.error('Login function does not exist!')}
// }