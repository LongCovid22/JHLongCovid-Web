import {
  ClusterOptions,
  MarkerClusterer,
  MarkerClustererOptions,
} from "@googlemaps/markerclusterer";
import React, { ReactElement, useState, useEffect } from "react";

interface ClusterProps extends MarkerClustererOptions {
  data: any[];
}

export const Cluster: React.FC<ClusterProps> = ({ map, markers, data }) => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    console.log("");

    return () => {};
  }, [data]);

  return <>{new MarkerClusterer({ map, markers })}</>;
};
