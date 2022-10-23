import React, {createContext, useState, useContext} from "react";
import { DisplayLanguage } from "./DisplayLanguage";

export const LanguageContext = createContext('en')

export function SelectLanguage () {

    const [language, setLanguage] = useState('en')

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value)
    }

    return (
        <div>
        
         <select value={language} onChange={handleChangeLanguage}>
             <option value='en'>English</option>
             <option value='it'>Italiano</option>
         </select>

         <LanguageContext.Provider value={language}>
             <DisplayLanguage />
         </LanguageContext.Provider>
    </div>
    )
}

// export class SelectLanguage extends React.Component {

//     state= {
//         language: 'en'
//     }

//     handleChangeLanguage = (event) => {
//         this.setState({
//             language: event.target.value
//         })
//     }

//     render() {
//         return (<div>
        
//         <select value={this.state.language} onChange={this.handleChangeLanguage}>
//             <option value='en'>English</option>
//             <option value='it'>Italiano</option>
//         </select>

//         <LanguageContext.Provider value={this.state.language}>
//             <DisplayLanguage />
//         </LanguageContext.Provider>
//     </div>)
//     }
// }