import { isEmpty } from 'lodash';
import { useState } from 'react';
import { GoogleMap, Marker, places } from './GoogleMapReact';

const K_HOVER_DISTANCE = 30;
const K_MARGIN_BOTTOM = 30;
const K_MARGIN_LEFT = 30;
const K_MARGIN_RIGHT = 30;
const K_MARGIN_TOP = 30;

const Map = ({ lat = 44.432, lng = 26.103 }) => {
  const [center, setCenter] = useState({ lat: lat, lng: lng });
  const [zoom, setZoom] = useState(10);
  const [selectedMarker, setSelectedMarker] = useState(null);

  const getMapBounds = (_map, maps, places) => {
    const bounds = new maps.LatLngBounds();
    places?.forEach((place) => {
      bounds.extend(new maps.LatLng(place?.lat, place?.lng));
    });
    return bounds;
  };

  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  const apiIsLoaded = (map, maps, places) => {
    const bounds = getMapBounds(map, maps, places);
    bindResizeListener(map, maps, bounds);
    map.fitBounds(bounds);
  };

  const onBoundsChange = (center, zoom) => {
    setCenter(center);
    setZoom(zoom);
  };

  const onChildClick = (key, childProps) => {
    const { lat, lng } = childProps;
    setCenter({ lat: lat, lng: lng });
    setZoom(15);
    setSelectedMarker(key);
  };

  const distanceToMouse = (pt, mousePos) => {
    return Math.sqrt((pt.x - mousePos.x) ** 2 + (pt.y - mousePos.y) ** 2);
  };

  return (
    <GoogleMap
      center={center}
      distanceToMouse={distanceToMouse}
      hoverDistance={K_HOVER_DISTANCE}
      margin={[K_MARGIN_TOP, K_MARGIN_RIGHT, K_MARGIN_BOTTOM, K_MARGIN_LEFT]}
      onBoundsChange={onBoundsChange}
      onChildClick={onChildClick}
      onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
      yesIWantToUseGoogleMapApiInternals
      zoom={zoom}
    >
      {!isEmpty(places) &&
        places?.map((place) => (
          <Marker
            id={place?.id}
            key={place?.id}
            lat={place?.lat}
            lng={place?.lng}
            selectedMarker={selectedMarker}
            text={place?.name}
          />
        ))}
    </GoogleMap>
  );
};

export default Map;
