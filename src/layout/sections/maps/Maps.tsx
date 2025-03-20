import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';

interface MapContainerProps {
    google: any;
}

export class Maps extends React.Component<MapContainerProps> {
    render() {
        const mapStyles = {
            width: "100%",
            height: "100%",
        };
        return (
            <MapContainer>
                <Map
                    google={this.props.google}
                    zoom={15}
                    style={mapStyles}
                    initialCenter={{ lat: 37.75933181204481, lng: -122.43751638663527 }}
                />
            </MapContainer>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA-Bk2JL3veNHAU8h9ZVOL2hnrWUxK7yaE'
})(Maps);


const MapContainer = styled.div`

    position: relative;
    max-width: 970px;
    height: 300px;
    margin: 70px auto 0 auto;
`