import React from "react";
import Hello from "./Hello";
import { Welcome } from "./Welcome";

// export default class App extends React.Component {
//     render(){
//         return <div><Hello /></div>;
//     }
// }

export default function App () {
    return <div>
            <Hello />
            <Welcome name="Michele"/>
        </div>;
}