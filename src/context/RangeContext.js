import { createContext, useState } from "react";

export const RangeContext = createContext();

export const ContextProvider = ({ children }) => {
  const [rangeValue, setRangeValue] = useState(50);
  return (
    <RangeContext.Provider value={[rangeValue, setRangeValue]}>
      {children}
    </RangeContext.Provider>
  );
};
