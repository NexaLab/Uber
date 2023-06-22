import { Icon } from "@rneui/themed";
import { StyleSheet, View, Text } from "react-native";
import { useFonts } from 'expo-font';
import { footerTextFontSize } from "../../font-sizes/Footer";









export default function Footer() {





    let [fontsLoaded] = useFonts({
        UberMoveBold: require('../../../assets/fonts/UberMoveBold.otf'),
        CircularStdMedium: require('../../../assets/fonts/CircularStd-Medium.otf'),
    });






    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }








    return (

        <View style={styles.footerContainer}>


            <View style={styles.footerButtonContainer}>
                <Icon name="home" size={20} color={"#ffffff"} />
                <Text style={
                    [
                        styles.footerButtonText,
                        {
                            fontFamily: "CircularStdMedium",
                            fontSize: footerTextFontSize
                        }
                    ]
                } >Home</Text>
            </View>





            <View style={styles.footerButtonContainer}>
                <Icon name="settings" size={20} color={"#ffffff"} />
                <Text style={
                    [
                        styles.footerButtonText,
                        {
                            fontFamily: "CircularStdMedium",
                            fontSize: footerTextFontSize
                        }
                    ]
                } >Settings</Text>
            </View>



        </View>

    );


};





const styles = StyleSheet.create({


    footerContainer: {
        height: 80,
        width: "100%",
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },


    footerButtonContainer: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        padding: 6.35,
        borderRadius: 20,
        paddingLeft: 14.5,
        paddingRight: 14.5,
        shadowColor: '#000',          // Shadow color
        shadowOffset: { width: 0, height: 2 },  // Shadow offset
        shadowOpacity: 0.25,          // Shadow opacity (0 to 1)
        shadowRadius: 3,              // Shadow radius
        elevation: 5,
        marginLeft: 26.5,
        marginRight: 26.5,
    },


    footerButtonText: {
        marginLeft: 8,
        color: "#ffffff"
    }


})