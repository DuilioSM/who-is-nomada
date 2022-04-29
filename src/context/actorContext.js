import { createContext, useContext, useState } from "react";

const actorContext = createContext();

export const useActor = () => {
  const context = useContext(actorContext);
  return context;
};

export const ActorContext = ({ children }) => {
  const [actor, setActor] = useState("");

  return (
    <actorContext.Provider value={{ actor, setActor }}>
      {children}
    </actorContext.Provider>
  );
};
