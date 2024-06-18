import { createContext, useContext, useMemo, useState } from "react";

type QueryStringContextProviderProps = {
  children: React.ReactNode;
};

interface QueryStringType {
  rooms?: number;
}

// Define a type for the context value
interface QueryContextType {
  queryString: QueryStringType;
  setQueryString: React.Dispatch<React.SetStateAction<QueryStringType>>;
}

// Provide a default value for the context
const defaultValue: QueryContextType = {
  queryString: {},
  setQueryString: () => {},
};

const QueryContext = createContext<QueryContextType>(defaultValue);

export const QueryStringContext: React.FC<QueryStringContextProviderProps> = ({
  children,
}) => {
  const [queryString, setQueryString] = useState<QueryStringType>({});

  const value = useMemo(
    () => ({ queryString, setQueryString }),
    [queryString, setQueryString]
  );

  return (
    <QueryContext.Provider value={value}>{children}</QueryContext.Provider>
  );
};

export function useQueryContext() {
  const context = useContext(QueryContext);
  if (context === undefined)
    throw new Error("useQueryContext was used outside of its Provider");
  return context;
}
