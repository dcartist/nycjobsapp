import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Mapalt(props) {
  

        const mapContainerRef = useRef(null);
        useEffect(() => {
          const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/dcartist/cjeu2tofp0wcs2rnbhooahyy5',
            center: [props.longitude, props.latitude],
            zoom: 10,
          });

          const mapMarker =  new mapboxgl.Marker({
            color: "red",
            draggable: true
            }).setLngLat([props.longitude, props.latitude])
            .addTo(map);
          return () => map.remove();
        }, []); 
  return <div className="map-container" ref={mapContainerRef} />;
}
