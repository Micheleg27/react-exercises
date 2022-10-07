import React from "react";

export class Age extends React.Component {
    render(){
    return <p>Your age is {this.props.age}</p>
}
}

// export function Age (props) {
//     return <p>Your age is {props.age}</p>
// }