import { createContext, useContext, useMemo, useState } from "react";
import { QueryFilters } from "../types/property";

type QueryStringContextProviderProps = {
  children: React.ReactNode;
};

interface QueryContextType {
  queryString: QueryFilters;
  setQueryString: React.Dispatch<React.SetStateAction<QueryFilters>>;
}

const defaultValue: QueryContextType = {
  queryString: {},
  setQueryString: () => {},
};

const QueryContext = createContext<QueryContextType>(defaultValue);

export const QueryStringContext: React.FC<QueryStringContextProviderProps> = ({
  children,
}) => {
  const [queryString, setQueryString] = useState<QueryFilters>({});

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
