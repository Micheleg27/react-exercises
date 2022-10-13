import React from "react";

export class UncontrolledLogin extends React.Component{

    

    SubmitForm = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember  = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember,
        })
    }

    componentDidMount(){
        this.nameInput.focus();
      }

    render(){
        return <div>
                <form onSubmit={this.SubmitForm}>
                    <input ref={(input) => {this.nameInput = input; }} name='username' type='text' defaultValue='Focused' required />
                    <input name='password' type='password' required />
                    <input name='remember' type='checkbox' />
                
                    <button type='submit'>LOGIN</button>
                    <button type='reset'>CLEAR</button>
                </form>
        </div>
    }
}