import React, { useContext, useState } from "react";

interface PlayerProviderProps {
  children: React.ReactNode;
}

interface PlayerContextProps {
  song: number | null;
  setSong: (arg: number) => void;
}

const PlayerContext = React.createContext({} as PlayerContextProps);

export const PlayerProvider = ({ children }: PlayerProviderProps) => {
  const [song, setSong] = useState<number | null>(null);

  return (
    <PlayerContext.Provider value={{ song, setSong }}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const playerContext = useContext(PlayerContext);

  return playerContext;
};
