import { useEffect, useRef } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Feature } from "ol";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { Style, Icon } from "ol/style";
import { useVehicleStore } from "../../stores/useVehicleStore";

const VehicleMap = () => {
  const mapRef = useRef();
  const mapInstance = useRef(null);
  const vectorSource = useRef(new VectorSource());
  const { vehicles } = useVehicleStore();

  useEffect(() => {
    if (!mapInstance.current) {
      const vectorLayer = new VectorLayer({
        source: vectorSource.current,
      });

      mapInstance.current = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          vectorLayer,
        ],
        view: new View({
          center: fromLonLat([0, 0]),
          zoom: 2,
        }),
      });
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(undefined);
        mapInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    vectorSource.current.clear();

    const features = vehicles.map((vehicle) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([vehicle.longitude, vehicle.latitude])),
        vehicle,
      });

      feature.setStyle(
        new Style({
          image: new Icon({
            src: "/truck-icon.svg",
            scale: 0.05,
          }),
        })
      );

      return feature;
    });

    vectorSource.current.addFeatures(features);

    if (features.length > 0) {
      const extent = vectorSource.current.getExtent();
      mapInstance.current.getView().fit(extent, { padding: [50, 50, 50, 50] });
    }
  }, [vehicles]);

  return (
    <div
      ref={mapRef}
      className="h-[600px] w-full rounded-lg shadow-lg overflow-hidden"
    />
  );
};

export default VehicleMap;
