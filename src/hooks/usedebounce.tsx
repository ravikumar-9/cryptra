import React,{ useEffect, useState } from "react";

const useDebounce = (value: string, delay: number) => {
  const [searchTerm, setSearchTerm] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return searchTerm;
};

export default useDebounce;
