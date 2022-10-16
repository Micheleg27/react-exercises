import React, {createContext} from "react";
import { DisplayLanguage } from "./DisplayLanguage";

export const LanguageContext = createContext('en')

export class SelectLanguage extends React.Component {

    state= {
        language: 'en'
    }

    handleChangeLanguage = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    render() {
        return (<div>
        
        <select value={this.state.language} onChange={this.handleChangeLanguage}>
            <option value='en'>English</option>
            <option value='it'>Italiano</option>
        </select>

        <LanguageContext.Provider value={this.state.language}>
            <DisplayLanguage />
        </LanguageContext.Provider>
    </div>)
    }
}