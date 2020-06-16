import React from "react";
import EntrySection from "./EntrySection";
import VisualizationSection from "./VisualizationSection";
import FactSection from "./FactSection";

export default function LowerHalf(){

    //Look ma, no prop drilling!
    return (
          <div className='lower-half'>
              <EntrySection />
              <VisualizationSection />
              <FactSection />
          </div>
    );
};
