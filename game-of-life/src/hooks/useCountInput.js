import { useState, useEffect } from 'react';

function useCountInput(integer){
    const [count, setCount] = useState(integer);
  
    useEffect(() => {
      document.title = `Pondering the number ${count}`;
    });
  
    return [count, setCount];
  }

export default useCountInput;