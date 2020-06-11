import React from "react";
// import FactSection from "./FactSection";
// import EntrySection from "./EntrySection";
// import VisualizationSection from "./VisualizationSection";
import CounterOutput from "./zzzCounterOutput";
import { useSelector } from "react-redux";

const LowerHalf = () => {
    const result = useSelector(state => state.globalNumber);
    // const dispatch = useDispatch();

    return (
        <React.Fragment>
            <CounterOutput value={result} />
        </React.Fragment>
    );
};

export default LowerHalf;
