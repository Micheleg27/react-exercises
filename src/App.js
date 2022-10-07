import React from "react";
import Hello from "./Hello";
import { Welcome } from "./Welcome";

export default class App extends React.Component {
    render(){
        return <div>
                <Hello />
<<<<<<< HEAD
                <Welcome name={<strong>Michele</strong>}/>
=======
                <Welcome name={<strong>Michele</strong>} age={17}/>
>>>>>>> conditional-rendering-01
                </div>;
    }
}