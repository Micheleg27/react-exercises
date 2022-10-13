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

    render(){
        return <div>
                <form onSubmit={this.SubmitForm}>
                    <input name='username' type='text' required />
                    <input name='password' type='password' required />
                    <input name='remember' type='checkbox' />
                
                    <button type='submit'>LOGIN</button>
                    <button type='reset'>CLEAR</button>
                </form>
        </div>
    }
}