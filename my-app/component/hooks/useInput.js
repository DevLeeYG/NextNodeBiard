import React, { useState, useCallback } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState((initialValue = null));
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};

export default useInput;
