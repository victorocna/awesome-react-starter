import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ children = null, ...props }) => {
  return (
    <main className="w-full h-screen">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_MAP_KEY,
          language: 'ro',
          region: 'ro',
          libraries: ['places'],
        }}
        {...props}
      >
        {children}
      </GoogleMapReact>
    </main>
  );
};

export default GoogleMap;
