import React from "react";
import { LanguageContext } from './SelectLanguage'

export class DisplayLanguage extends React.Component{
    render() {
        return <LanguageContext.Consumer>
                {(language) => {
                    return <h1>Current language is: {language}</h1>
                }}
        </LanguageContext.Consumer>
    }

}