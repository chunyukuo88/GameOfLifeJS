import { useContext, useEffect } from 'react';
import { CountContext } from "../context/count-context";

function useCountInput(){
    const [count, setCount] = useContext(CountContext);

    useEffect(() => {
      document.title = `Pondering the number ${count}`;
    });

    return [count, setCount];
  }

export default useCountInput;
