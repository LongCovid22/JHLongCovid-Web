import React, { useContext, useState } from "react";

interface MapContextType {
  map: google.maps.Map | null;
}

interface MapUpdateContextType {
  setMapContext: React.Dispatch<React.SetStateAction<google.maps.Map | null>>;
}

interface MapProviderProps {
  children: any;
}
const MapContext = React.createContext<MapContextType | null>(null);
const MapUpdateContext = React.createContext<MapUpdateContextType | null>(null);

export const useMapContext = () => useContext(MapContext);
export const useMapUpdateContext = () => useContext(MapUpdateContext);

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  return (
    <MapContext.Provider value={{ map }}>
      <MapUpdateContext.Provider value={{ setMapContext: setMap }}>
        {children}
      </MapUpdateContext.Provider>
    </MapContext.Provider>
  );
};
