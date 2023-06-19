import { useState } from "react";
import * as Location from "expo-location"








function useLocationPermission() {


    const [currentLocation, setCurrentLocation] = useState({
        latitude: null,
        longitude: null
    });




    const getCurrentLocation = async () => {
        try {
            // const { status } = await Geolocation.requestAuthorization('whenInUse');
            // if (status !== 'granted') {
            //     console.log('Permission to access location was denied');
            //     return;
            // }

            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;
                    setCurrentLocation({ ...currentLocation, latitude, longitude });
                },
                error => {
                    console.log('Error getting current location:', error);
                }
            );
        } catch (error) {
            console.log('Error getting current location:', error);
        }
    };








    const requestLocationPermission = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setCurrentLocation({ ...currentLocation, latitude, longitude });
    }



    return [currentLocation, requestLocationPermission];

}


export default useLocationPermission;