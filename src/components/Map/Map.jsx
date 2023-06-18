import { Image, SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Dimensions, PixelRatio } from "react-native";
import { useFonts } from 'expo-font';
import { Icon } from '@rneui/themed';
import MapView from "react-native-maps";
import useLocationPermission from "../../hooks/useLocationPermission/useLocationPermission";
import { useEffect } from "react";







export default function Map() {


    const [requestLocationPermission] = useLocationPermission();




    useEffect(() => {

        requestLocationPermission();

    }, [])





    return (
        <MapView
            style={styles.mapContainer}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.09722,
                longitudeDelta: 0.0421
            }}
        />
    )
}



const styles = StyleSheet.create({


    mapContainer: {
        flex: 1
    }
})