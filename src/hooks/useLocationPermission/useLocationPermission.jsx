import { useState } from "react";
import * as Location from "expo-location"








function useLocationPermission() {


    const [currentLocation, setCurrentLocation] = useState({
        latitude: null,
        longitude: null
    });





    const requestLocationPermission = async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setCurrentLocation({ ...currentLocation, latitude, longitude });
    }



    return [currentLocation, requestLocationPermission];

}


export default useLocationPermission;