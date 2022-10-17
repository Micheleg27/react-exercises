import React from "react";
import { Age } from "./Age";

export function Welcome ({name, age}) {
    return <div className="welcome">
        <p>Welcome, {name}</p>
        {age > 18
        ? <Age age={age} /> 
        : <p>You are very young</p>
        }
    </div>
}