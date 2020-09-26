import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import HeatLayer from './heat-layer';
import Analytics from '../../services/analytics';
import getClosetCity from '../../util/closestCity';
import mapDarkTheme from '../../constants/mapDarkTheme.json';
import useTheming from '../../hooks/useTheming';

const libraries = ['visualization'];
const googleMapsApiKey =
  process.env.REACT_APP_GOOGLE_API_KEY ||
  'AIzaSyCeHLAyDL5K80JrbJ0mvh-pV3CcpWYpqn0';

const containerStyle = {
  flex: '1',
  height: '100vh',
};

const options = {
  restriction: {
    latLngBounds: {
      north: 52,
      south: 22,
      west: -136,
      east: -60,
    },
  },
  mapTypeControl: false,
  fullscreenControl: false,
  streetViewControl: false,
};

function Map({ incidents, onCityClick }) {
  const [theme] = useTheming();
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(mapInstance) {
    setMap(mapInstance);
    mapInstance.setCenter({
      lat: 38,
      lng: -98,
    });
    mapInstance.setZoom(5);
  }, []);

  function handleMapClick(e) {
    if (incidents.length === 0) return;
    const city = getClosetCity(
      {
        lat: e.latLng.lat(),
        long: e.latLng.lng(),
      },
      incidents,
    );

    Analytics.event('Map', 'Clicked on a city', city.name);
    onCityClick(city.name);

    map.setZoom(7);
    map.panTo({
      lat: Number(city.coordinate.lat),
      lng: Number(city.coordinate.long),
    });
  }

  return (
    <LoadScript libraries={libraries} googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={{
          options,
          styles: theme === 'dark' ? mapDarkTheme : null,
        }}
        onLoad={onLoad}
        onClick={handleMapClick}
      >
        <HeatLayer incidents={incidents} />
      </GoogleMap>
    </LoadScript>
  );
}

Map.propTypes = {
  incidents: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export default Map;
