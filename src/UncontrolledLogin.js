import React from "react";

export class UncontrolledLogin extends React.Component {
    _formRef = React.createRef()

    formSubmit = (event) => {
        event.preventDefault()

                const userInfo = {
                    username: event.target.elements.username.value,
                    password: event.target.elements.password.value,
                    remember: event.target.elements.remember.checked,
                }

                console.log(userInfo)
            }

            componentDidMount(){
                this.nameInput.focus();
              }

    render(){
        return (
                <form onSubmit={this.formSubmit} ref={this._formRef} >
                <input type='text' name='username' ref={(input) => this.nameInput = input}></input>
                <input type='password' name='password'></input>
                <input type='checkbox' name='remember'></input>

                <button>LOGIN</button>
                <button>CLEAR</button>
                </form>
        )
    }
}

    