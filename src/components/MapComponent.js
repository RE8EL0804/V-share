// import React, { useEffect } from "react";
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// mapboxgl.accessToken = 'pk.eyJ1IjoidGhlcHJvdG9uMjUiLCJhIjoiY2txdjAwdXFwMDlvbjJvbzZrNGJsYjBxeSJ9.cMvYXpGi2feyvpgpvaqLkg';

// const MapComponent= () => {

//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition((pos) => {
//             // let lat =-77.032;
//             // let lon = 38.913;

//               var map = new mapboxgl.Map({
//                 container: 'map-box',
//                 style: 'mapbox://styles/mapbox/streets-v11',
//                 center: [-96, 37.8],
//                 zoom: 3
//             });

//             for (const feature of geojson.features) {
//                 // create a HTML element for each feature
//                 const el = document.createElement('div');
//                 el.className = 'marker';
        
//                 // make a marker for each feature and add it to the map
//                 new mapboxgl.Marker(el)
//                   .setLngLat(feature.geometry.coordinates)
//                   .setPopup(
//                     new mapboxgl.Popup({ offset: 25 }) // add popups
//                       .setHTML(
//                         `<h3>Location</h3><p>${feature.properties.description}</p>`
//                       )
//                   )
//                   .addTo(map);
//               }
//         })

//     }, [])

//     return (
//         <div id="map-box"  style={{ position:"absolute",Height: "100%",top: "0",bottom:"0",width:"100%" }}></div>
//     );
// }



// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Marker
// } from "react-simple-maps";

// const geoUrl =
//   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

// const markers = [
//   {
//     markerOffset: -15,
//     name: "chennai central",
//     coordinates: [13.0841906,80.2722974]
//   },
//   { markerOffset: -15, name: "madras pavilion", coordinates: [13.0112375, 80.2186117] },
//   { markerOffset: 25, name: "MKC", coordinates: [12.9896451, 80.2186107] },
//   { markerOffset: 25, name: "southern spice", coordinates: [13.058171, 80.2451588] },
//   { markerOffset: 25, name: "rhapsody", coordinates: [13.0459971,80.2456463] },
// ];

// const MapChart = () => {
//   return (
//     <ComposableMap
//       projection="geoAzimuthalEqualArea"
//       projectionConfig={{
//         rotate: [58, 20, 0],
//         scale: 400
//       }}
//     >
//       <Geographies geography={geoUrl}>
//         {({ geographies }) =>
//           geographies
//             .filter(d => d.properties.REGION_UN === "Americas")
//             .map(geo => (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 fill="#EAEAEC"
//                 stroke="#D6D6DA"
//               />
//             ))
//         }
//       </Geographies>
//       {markers.map(({ name, coordinates, markerOffset }) => (
//         <Marker key={name} coordinates={coordinates}>
//           <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
//           <text
//             textAnchor="middle"
//             y={markerOffset}
//             style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
//           >
//             {name}
//           </text>
//         </Marker>
//       ))}
//     </ComposableMap>
//   );
// };

// import React from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// const MapContainer = () => {
  
//               const mapStyles = {        
//                 height: "100vh",
//                 width: "100%"};
              
//               const defaultCenter = {
//                 lat: lat, lng: lon}
//   return (
//      <LoadScript
//        googleMapsApiKey='AIzaSyAK2mNrxI26YWF83Z0iw0HivCHzmtUHFZg'>
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={12}
//           center={defaultCenter}
//         />
//      </LoadScript>
//   )

//   }



import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import React, {useState } from "react";
export const MapContainer = () => {
  
  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }

  const locations = [
    {
      name: "jupiter residency",
      location: { 
        lat: 13.1028954,
        lng:  80.260313
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 12.9896451,
        lng: 80.2186107
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 13.058171,
        lng: 80.2451588
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 13.04599713,
        lng: 80.245646
      },
    },
  ];

     const defaultCenter = {
     lat: 13.0841906, lng: 80.2722974
   }

   const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  
  return (
    <LoadScript
        googleMapsApiKey='AIzaSyAK2mNrxI26YWF83Z0iw0HivCHzmtUHFZg'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}>
            {
            locations.map(item => {
              return (
              <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
        {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <p>{selected.name}</p>
            </InfoWindow>
            )
         }
         {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
     </GoogleMap></LoadScript>
     
  )
}


export default MapContainer;