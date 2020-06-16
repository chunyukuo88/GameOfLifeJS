import { useContext, useEffect } from 'react';
import { CountContext } from "../context/count-context";

export default function useCountInput(){
    const [count] = useContext(CountContext);

    useEffect(() => {
      document.title = `Pondering the number ${count}`;
    });
};
