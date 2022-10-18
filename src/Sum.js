import React from "react";

export function Sum ({numbers: [...nums]}){
    return <h1>The sum is: {nums.reduce((sum, value) => sum += value)}</h1>
}


// Risolto con rest operator in quanto la traccia a mia interpretazione richiedeva
// la somma a prescindere dal numero di elementi degli array, in altro caso:

// export function Sum ({numbers: [num1, num2]}){
//     return <h1>The sum is: {num1 + num2}</h1>
// }