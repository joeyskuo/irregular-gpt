import { useState, useEffect, useRef } from "react";

export const useStateRef = (initialValue) => {
    
    const [value, setValue] = useState(initialValue);
  
    const ref = useRef(value);
  
    useEffect(() => {
      ref.current = value;
      // console.log("value has been saved as " + value);
    }, [value]);
  
    return [value, setValue, ref];
  }