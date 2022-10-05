import React from "react";
import Message from "./Message";

// export default class Hello extends React.Component {
//     render(){
//         return (<div>
//             <h1>Hello World</h1>,
//             <p>What a beautiful day</p>
//             </div>  
//             )
// }
// }

export default function Hello () {
    return ( <div>
                <h1>Hello World</h1>
                <Message />
            </div>
        )
}