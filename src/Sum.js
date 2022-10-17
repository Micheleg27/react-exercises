import React from "react";

// export function Sum ({numbers: [...nums]}){
//     return <h1>The sum is: {nums.reduce((sum, value) => sum += value)}</h1>
// }

export function Sum ({numbers: [num1, num2]}){
    return <h1>The sum is: {num1 + num2}</h1>
}

// export function Sum ({numbers: [{num1 = 5}, {num2 = 6}]}){
//     return <h1>The sum is: {num1 + num2}</h1>
// }