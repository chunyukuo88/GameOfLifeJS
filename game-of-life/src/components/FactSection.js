import React, { useContext } from "react";
import MathFact from "./mathFact";
import { CountContext } from "../context/count-context";

export default function FactSection(){
    const [ count ] = useContext(CountContext);

    return (
        <React.Fragment>
            <div className='fact-section'>
                <p className='fact-label'>
                    <span>Now here is a fun fact about the number </span><span>{count}:</span>
                </p>
                <MathFact />
            </div>
        </React.Fragment>
    );
};
