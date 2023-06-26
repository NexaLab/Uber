import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useLocationPermission from "../../hooks/useLocationPermission/useLocationPermission";
import { useEffect, useRef, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import { mapMarkers } from "../../data/Map";
import { GOOGLE_MAP_API_KEY } from "../../secret-keys/GoogleMapAPIKey";
import { Toast } from 'react-native-toast-message/lib/src/Toast';










export default function Map(props) {






    const mapRef = useRef();
    const [currentLocation, requestLocationPermission] = useLocationPermission();








    const [pickAndDropState, setPickAndDropState] = useState({

        pickUpCordinates: {
            latitude: 24.8800899, longitude: 67.0635722,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01

        },


        dropUpCordinates: {
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }
    });


    const { pickUpCordinates, dropUpCordinates } = pickAndDropState;










    const showToastFunc = (message1, message2) => {
        Toast.show({
            type: 'info',
            text1: message1,
            text2: message2,
            position: 'top',
            visibilityTime: 5000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        });
    };









    useEffect(() => {


        setPickAndDropState(prevState => ({
            ...prevState,
            dropUpCordinates: {
                latitude: props.dropUpCoordinates.latitude != null ? props.dropUpCoordinates.latitude : prevState.dropUpCordinates.latitude,
                longitude: props.dropUpCoordinates.longitude != null ? props.dropUpCoordinates.longitude : prevState.dropUpCordinates.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }
        }));


    }, [props.dropUpCoordinates]);








    useEffect(() => {


        setPickAndDropState(prevState => ({
            ...prevState,
            pickUpCordinates: {
                latitude: currentLocation.latitude != null ? currentLocation.latitude : prevState.pickUpCordinates.latitude,
                longitude: currentLocation.longitude != null ? currentLocation.longitude : prevState.pickUpCordinates.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }
        }));


    }, [currentLocation.latitude]);









    useEffect(() => {

        requestLocationPermission();

    }, []);







    return (


        <>

            <MapView
                style={styles.mapContainer}
                initialRegion={pickUpCordinates}
                ref={mapRef}
            >


                <Marker coordinate={pickUpCordinates} image={mapMarkers.pickUpMarker} anchor={{ x: 0.5, y: 0.5 }} />

                <Marker coordinate={dropUpCordinates} image={mapMarkers.destinationMarker} anchor={{ x: 0.5, y: 0.5 }} />




                {
                    dropUpCordinates.latitude === 0 && dropUpCordinates.longitude === 0 ? null :

                        <MapViewDirections
                            origin={pickUpCordinates}
                            destination={dropUpCordinates}
                            apikey={GOOGLE_MAP_API_KEY}
                            strokeWidth={10}
                            strokeColor="black"
                            optimizeWaypoints={true}
                            onError={() => showToastFunc("Info", "Select the desired location near you")}
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
                }



            </MapView>

            <Toast />
        </>


    )
}



const styles = StyleSheet.create({


    mapContainer: {
        flex: 2
    }
})