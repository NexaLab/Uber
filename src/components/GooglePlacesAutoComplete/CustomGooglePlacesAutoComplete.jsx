import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_API_KEY } from "../../secret-keys/GoogleMapAPIKey";
import { View, StyleSheet, Text } from "react-native";
import { useFonts } from 'expo-font';
import { Icon } from "@rneui/themed";







export default function CustomGooglePlacesAutoComplete(props) {







    const onSelectAddress = (data, details) => {

        const latitude = details.geometry.location.lat;
        const longitude = details.geometry.location.lng;
        props.fetchDropUp(latitude, longitude);


    }






    let [fontsLoaded] = useFonts({
        UberMoveBold: require('../../../assets/fonts/UberMoveBold.otf'),
        CircularStdMedium: require('../../../assets/fonts/CircularStd-Medium.otf'),
    });






    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }







    return (


        <View style={styles.googleAutoCompleteContainer}>


            <GooglePlacesAutocomplete

                placeholder={props.placeholderText}
                onPress={onSelectAddress}
                fetchDetails={true}
                renderLeftButton={() => (

                    <View style={styles.dropUpLocationContainer}>
                        <Icon name='location-pin' />
                    </View>

                )}
                query={{
                    language: "en",
                    key: GOOGLE_MAP_API_KEY
                }}

                styles={{
                    textInputContainer: styles.containerStyle,
                    textInput: [
                        styles.textInputStyle,
                        {
                            fontFamily: 'UberMoveBold'
                        }
                    ]
                }}
            />


        </View>


    );


};





const styles = StyleSheet.create({


    googleAutoCompleteContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
        padding: 20,
        paddingTop: 50
    },


    dropUpLocationContainer: {
        justifyContent: "center"
    },


    containerStyle: {
        paddingLeft: 10,
        backgroundColor: "white",
        borderColor: "#F3F3F3",
        borderWidth: 1,
        shadowColor: '#000',          // Shadow color
        shadowOffset: { width: 0, height: 2 },  // Shadow offset
        shadowOpacity: 0.25,          // Shadow opacity (0 to 1)
        shadowRadius: 3,              // Shadow radius
        elevation: 5,
    },


    textInputStyle: {
        height: 48,
        color: "black",
        fontWeight: "700",
        fontSize: 16,
        backgroundColor: "#ffffff"
    }
})