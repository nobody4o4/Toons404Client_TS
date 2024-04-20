import { createContext, ReactNode, useContext, useState } from "react";

type TScrollerContext = {
  path: string | undefined;
  setPath: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const PathCtx = createContext<TScrollerContext>({
  path: "",
  setPath: () => {},
});

export const Provider = ({ children }: { children: ReactNode }) => {
  const [path, setPath] = useState<string | undefined>("");
  return (
    <PathCtx.Provider
      value={{
        path,
        setPath,
      }}
    >
      {children}
    </PathCtx.Provider>
  );
};

export const useScrollCtx = () => useContext(PathCtx);
