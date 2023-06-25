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
                <Icon name="home" size={23} color={"#414a4c"} />
            </View>


            <View style={styles.footerButtonContainer}>
                <Icon name="directions-car" type="material" size={23} color={"#414a4c"} />
            </View>


            <View style={styles.footerButtonContainer}>
                <Icon name="credit-card" size={23} color={"#414a4c"} />
            </View>



            <View style={styles.footerButtonContainer}>
                <Icon name="settings" size={23} color={"#414a4c"} />
            </View>



        </View>

    );


};





const styles = StyleSheet.create({


    footerContainer: {
        height: 45,
        width: "100%",
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#F2F3F5",
        shadowColor: '#000',          // Shadow color
        shadowOffset: { width: 0, height: 2 },  // Shadow offset
        shadowOpacity: 0.25,          // Shadow opacity (0 to 1)
        shadowRadius: 3,              // Shadow radius
        elevation: 5,
    },


    footerButtonContainer: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 6.35,
        borderRadius: 20,
        paddingLeft: 14.5,
        paddingRight: 14.5,
        marginLeft: 23.5,
        marginRight: 23.5,
    },


    footerButtonText: {
        marginLeft: 8,
        color: "black"
    }


})