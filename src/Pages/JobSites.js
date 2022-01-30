import React from 'react';
import data from '../data.json'
import { GMap } from 'primereact/gmap';
export default function JobSites() {

    const options = {
        center: {lat: 36.890257, lng: 30.707417},
        zoom: 12
    };

  return <div>
      {data.map((item, index)=> <div> {item.facility_name} </div>)}

      <GMap options={options} style={{width: '100%', minHeight: '320px'}} />
  </div>;
}
