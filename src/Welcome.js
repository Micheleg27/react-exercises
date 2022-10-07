import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    static defaultProps = {
        name: 'guest'
      }

    render(){
        return (<div>
            <p>Welcome, {this.props.name}</p>
            {this.props.age > 18 && this.props.age < 65 && <Age age={this.props.age} />}
            </div>)
    }
}