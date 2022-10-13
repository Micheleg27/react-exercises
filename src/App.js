import React from "react";
import Hello from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteraciveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

const login = (dati) => {
    console.log(dati)
}

export default class App extends React.Component {
    render(){
        return <div>
                <Hello />
                <Welcome name={<strong>Michele</strong>} age={17}/>
                <Counter />
                <ClickCounter />
                <ClickTracker />
                <InteraciveWelcome />
                <Login onLogin = { login }/>
                </div>;
    }
}