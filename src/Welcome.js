import React from "react";

export class Welcome extends React.Component {
    static defaultProps = {
        name: 'guest'
      }

    render(){
        return <p>Welcome, {this.props.name}</p>
    }
}

// Welcome.defaultProps = {
//     name: 'guest'
// }