import React from 'react';
import jobdata from '../data.json'
import GoogleMapReact from 'google-map-react';
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {MapView, FirstPersonView} from '@deck.gl/core';
import {StaticMap} from 'react-map-gl';
import Pins from '../Components/Pins'
// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude:-73.935242,
  latitude: 40.730610,
  zoom: 11,
  style: 'mapbox://styles/dcartist/cjeu2tofp0wcs2rnbhooahyy5',
  pitch: 0,
  bearing: 0
};
const MAPBOX_ACCESS_TOKEN =process.env.REACT_APP_mapboxgl.accessToken
// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];
export default function JobSites() {
  let nyplace= `1365 Jerome Avenue, New York, NY`
  // let nyplace= `${this.props.newLocation}, New York, NY`
  let Location = nyplace.split(" ").join("+");
  
  const mapUrl = encodeURI(
  
    `${process.env.REACT_APP_GoogleMaps}${Location}`
   
  );
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];
  return <div>
    <div>  <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={false}
      layers={layers}>
      <MapView id="map" width="100%" controller={true} style={{position:"relative"}}>
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} style={{position:"relative"}}/>

        {/* <Pins data={jobdata}  /> */}
      </MapView>
      <FirstPersonView width="100%" x="100%" fovy={50} style={{position:"relative"}} />
    </DeckGL></div>
    
{/* <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}> <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL> */}
{/* <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src={mapUrl}
              className="mapDiv"
              title="map"
              
            ></iframe> */}
  
      ------
      {jobdata.map((item, index)=> <div key={index}> {item.facility_name} {item.street_address} </div>)}

  </div>;
}
