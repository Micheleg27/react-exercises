import React from "react";
import Hello from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteraciveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { ToDoList } from "./ToDoList";
import { Container } from "./Container";

const login = (dati) => {
    console.log(dati)
}

export default class App extends React.Component {
    render(){
        return <div>
                <Container title='My React application' >

                    <Hello />
                    <Welcome name={<strong>Michele</strong>} age={17} />
                    <Counter />
                    <ClickCounter />
                    <ClickTracker />
                    <InteraciveWelcome />
                    <Login onLogin = { login }/>
                    <UncontrolledLogin />
                    <ToDoList 
                    render={(items) => {
                        items = this.state.items

                        this.state.items.map((todo, index) => {
                            return (
                                <div>
                                    <ul>
                                    <li key={index} value={this.state.liValue}>{todo}</li>
                                    <button onClick={() => this.removeListItem(index)}>Remove</button>
                                    </ul>
                                </div>
                            )
                        })
                    }}
                    >
                    </ToDoList>

                </Container>
                </div>;
    }
}