import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useLocationPermission from "../../hooks/useLocationPermission/useLocationPermission";
import { useEffect, useRef, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import { mapMarkers } from "../../data/Map";
import { GOOGLE_MAP_API_KEY } from "../../secret-keys/GoogleMapAPIKey";










export default function Map(props) {




    const mapRef = useRef();
    const [requestLocationPermission] = useLocationPermission();




    const [pickAndDropState, setPickAndDropState] = useState({

        pickUpCordinates: {
            latitude: 30.7046,
            longitude: 76.7179,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421

        },


        dropUpCordinates: {
            latitude: props.dropUpCoordinates.latitude != null ? props.dropUpCoordinates.latitude : 30.7333,
            longitude: props.dropUpCoordinates.longitude != null ? props.dropUpCoordinates.longitude : 76.7794,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }
    });


    const { pickUpCordinates, dropUpCordinates } = pickAndDropState;






    useEffect(() => {


        setPickAndDropState(prevState => ({
            ...prevState,
            dropUpCordinates: {
                latitude: props.dropUpCoordinates.latitude != null ? props.dropUpCoordinates.latitude : 30.7333,
                longitude: props.dropUpCoordinates.longitude != null ? props.dropUpCoordinates.longitude : 76.7794,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }
        }));


    }, [props.dropUpCoordinates]);









    useEffect(() => {

        requestLocationPermission();

    }, []);






    return (


        <MapView
            style={styles.mapContainer}
            initialRegion={pickUpCordinates}
            ref={mapRef}
        >


            <Marker coordinate={pickUpCordinates} image={mapMarkers.pickUpMarker} />

            <Marker coordinate={dropUpCordinates} image={mapMarkers.destinationMarker} />




            <MapViewDirections
                origin={pickUpCordinates}
                destination={dropUpCordinates}
                apikey={GOOGLE_MAP_API_KEY}
                strokeWidth={10}
                strokeColor="black"
                optimizeWaypoints={true}
                onReady={result => {
                    mapRef.current.fitToCoordinates(result.coordinates, {
                        edgePadding: {
                            right: 30,
                            bottom: 100,
                            left: 30,
                            top: 100
                        }
                    })
                }}
            />

        </MapView>


    )
}



const styles = StyleSheet.create({


    mapContainer: {
        flex: 1
    }
})