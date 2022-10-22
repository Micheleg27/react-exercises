import React, { useContext } from "react";
import { LanguageContext } from './SelectLanguage'

    export function DisplayLanguage() {

        const language = useContext(LanguageContext)

        return <h2>Current language: {language}</h2>
    }