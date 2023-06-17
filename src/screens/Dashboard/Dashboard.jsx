import { Image, SafeAreaView, StyleSheet, View, Platform, TouchableOpacity, Text, Dimensions } from "react-native";
import { useFonts } from 'expo-font';
import { Icon } from '@rneui/themed';



const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;




export default function Dashboard() {



    let [fontsLoaded] = useFonts({
        UberMoveBold: require('../../../assets/fonts/UberMoveBold.otf'),
        CircularStdMedium: require('../../../assets/fonts/CircularStd-Medium.otf'),
    });






    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }



    return (


        <SafeAreaView style={styles.dashboardContainer}>


            <View>

                <Image
                    style={styles.uberIcon}
                    source={
                        require("../../../assets/Uber.png")
                    }
                />

            </View>



            <TouchableOpacity style={styles.getARideContainer}>


                <View>
                    <Image
                        style={styles.carIcon}
                        source={{ uri: "https://links.papareact.com/3pn" }}
                    />
                </View>


                <Text

                    style={
                        [
                            {
                                fontFamily: 'CircularStdMedium'
                            },

                            styles.getARideText
                        ]
                    }

                >Get a Ride
                </Text>


                <View style={styles.getARideArrowIconContainer}>
                    <Icon name="arrow-right" type="feather" color={"white"} style={styles.getARideArrowIcon} />
                </View>


            </TouchableOpacity>


            <View style={styles.dashboardSloganContainer}>


                <Text

                    style={
                        [
                            styles.sloganText,
                            {
                                fontFamily: 'UberMoveBold'
                            }
                        ]
                    }

                >
                    Tap the app, get a ride!!
                </Text>


                <Text
                    style={
                        [
                            styles.sloganTextSubtitle,
                            {
                                fontFamily: 'UberMoveBold'
                            }
                        ]
                    }
                >
                    Drive on a platform with the largest network of active passengers.
                </Text>


                <Text
                    style={
                        [
                            styles.sloganTextPoweredBy,
                            {
                                fontFamily: 'UberMoveBold'
                            }
                        ]
                    }
                >
                    Powered By NexaLab.
                </Text>

            </View>


        </SafeAreaView>


    )
}



const styles = StyleSheet.create({


    dashboardContainer: {
        height: "100%",
        backgroundColor: "#ffffff",

    },


    uberIcon: {
        width: 200,
        height: 200,
        resizeMode: "contain",
    },



    getARideContainer: {
        backgroundColor: "#ececec",
        width: "48%",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 30,
        marginLeft: "10%",
        borderRadius: 20
    },


    carIcon: {
        width: 120,
        height: 120,
        resizeMode: "contain",
        marginBottom: 13
    },


    getARideText: {
        fontSize: 16,
        fontWeight: "800",
        alignSelf: "flex-start",
        marginLeft: "15%",
        marginBottom: 15

    },


    getARideArrowIconContainer: {
        alignSelf: "flex-start",
        marginLeft: "15%"

    },


    getARideArrowIcon: {
        color: "white",
        backgroundColor: "black",
        padding: 3,
        borderRadius: 50,
        alignSelf: "flex-start"
    },


    dashboardSloganContainer: {
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "50%",
        // borderColor: "red",
        // borderWidth: 1
    },


    sloganText: {
        fontWeight: "bold",
        fontSize: width * 0.07
    },


    sloganTextSubtitle: {
        fontSize: width * 0.035,
        color: "lightgray",
        marginTop: 20,
        width: "70%",
        textAlign: "center"

    },


    sloganTextPoweredBy: {

        fontSize: width * 0.04,
        color: "lightgray",
        marginTop: 60,
        width: "75%",
        textAlign: "center"

    }
})
