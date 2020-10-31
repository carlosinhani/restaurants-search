import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';


export const MapContainer = (props) => {
  const { google } = props;

  return <Map google={google} centerAroundCurrentLocation />;
};

export default GoogleApiWrapper ({
  apiKey: process.env.REACT_APP_GOOGLE_APIA_KEY,
  language: 'pt-BR',
})(MapContainer);
