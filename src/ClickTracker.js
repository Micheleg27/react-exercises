import React from "react";

export class ClickTracker extends React.Component {
    state = {
        click: '',
    }

    lastButton = (e) => {
        this.setState(() => {
            return {click: e.target.id}
        })
    }


    render(){
        return (
                <div>
                    <button id="btn1" onClick={this.lastButton}>Button 1</button>
                    <button id="btn2" onClick={this.lastButton}>Button 2</button>
                    <button id="btn3" onClick={this.lastButton}>Button 3</button>
                    <h1>Last button clicked: {this.state.click}</h1>
                </div>
        )      
    }
}