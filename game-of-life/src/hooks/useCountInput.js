import { useState, useEffect } from 'react';

function useCountInput(integer){
    const [count, setCount] = useState(integer);
  
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  
    return [count, setCount];
  }

  export default useCountInput;