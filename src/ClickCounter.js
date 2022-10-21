import React, { useEffect, useState } from "react";

// export class ClickCounter extends React.Component {

//     state = {
//         count: 0
//     }

//      clickCount = () => {
//         this.setState((state) => {
//             return {count: state.count + 1}
//         })
//     }

//     render(){
//         return <div>
//                     <button onClick={this.clickCount}>Click Counter</button>
//                     <h1>Count: {this.state.count}</h1>
//                 </div>
//     }
// }

export function ClickCounter ({initialValue = 0, incrementOne = 1}, props) {

    const [count, setCount] = useState(initialValue)

    const incrementCount = () => {
        setCount(count + incrementOne)
    }

    useEffect(() => {
        props.onCounterChange(count);
    }, 
    
    [count, props]);

    return      <div>
                    <button onClick={incrementCount}>Click Counter</button>
                    <h1>Count: {count}</h1>
                </div>
}