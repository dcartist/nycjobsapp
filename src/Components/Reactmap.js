import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
// import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker'; // Load worker code separately with worker-loader
import data from "../data.json"
import '../App.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// mapboxgl.workerClass = MapboxWorker; 
const Reactmap = () => {
  const mapContainerRef = useRef(null);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/dcartist/cjeu2tofp0wcs2rnbhooahyy5',
      center: [-73.935242, 40.730610],
      zoom: 10.8,
      pitch: 50,
    });

    map.scrollZoom.disable();

    // const marker = new mapboxgl.Marker()
    // .setLngLat([-73.918421, 40.839604])
    // .addTo(map);
    const makers = data.map(item=>{
        new mapboxgl.Marker({
            color: "red",
            draggable: true
            }).setLngLat([item.longitude, item.latitude])
            .addTo(map);

    })
    const marker = new mapboxgl.Marker({
        color: "red",
        draggable: true
        }).setLngLat([-73.918421, 40.639604])
        .addTo(map);
    // add navigation control (the +/- zoom buttons)
    // map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Reactmap;
