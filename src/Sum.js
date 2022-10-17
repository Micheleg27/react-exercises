import React from "react";

export function Sum ({numbers: [...nums]}){
    return <h1>The sum is: {nums.reduce((sum, value) => sum += value)}</h1>
}