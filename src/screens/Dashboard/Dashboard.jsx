import { Image, SafeAreaView, StyleSheet, View, TouchableOpacity, Text, Dimensions, PixelRatio, Animated, FlatList, TouchableWithoutFeedback } from "react-native";
import { useFonts } from 'expo-font';
import { Icon } from '@rneui/themed';
import { subtitlePoweredByfontSize, sloganTextFontSize, sloganTextSubtitleFontSize, getARideTextFontSize } from "../../font-sizes/Dashboard";
import { useRef, useState } from "react";
import { menus } from "../../data/Dashboard";







export default function Dashboard() {



    const [showMenu, setShowMenu] = useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState(0);




    const moveToRight = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(1)).current;






    const reduceDashboardScreenSize = () => {


        Animated.timing(scale, {
            toValue: showMenu ? 1 : 0.6,
            duration: 300,
            useNativeDriver: true
        }).start();


        Animated.timing(moveToRight, {
            toValue: showMenu ? 0 : 250,
            duration: 300,
            useNativeDriver: true
        }).start();


        setShowMenu(!showMenu);

    }







    let [fontsLoaded] = useFonts({
        UberMoveBold: require('../../../assets/fonts/UberMoveBold.otf'),
        CircularStdMedium: require('../../../assets/fonts/CircularStd-Medium.otf'),
    });






    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }






    return (



        <TouchableWithoutFeedback onPress={() => {
            showMenu === true ? reduceDashboardScreenSize() : null
        }}>


            <SafeAreaView style={styles.dashboardContainer} >


                <View>


                    <View
                        style={{ width: "100%", flexDirection: "row", alignItems: "center", marginTop: 50 }}
                    >


                        <Image
                            source={{ uri: "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg" }}
                            style={{ width: 70, height: 70, borderRadius: 35, marginLeft: 20 }}
                        />


                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 22, fontWeight: "800", color: "white" }}>Selina Gomez</Text>
                            <Text style={{ fontSize: 14, marginTop: 5, color: "white" }}>selina@gmail.com</Text>
                        </View>



                    </View>




                    <View style={{ marginTop: 70 }}>


                        <FlatList

                            data={menus}
                            renderItem={({ item, index }) => {
                                return (

                                    <TouchableOpacity

                                        style={
                                            {
                                                width: 200,
                                                height: 50,
                                                marginLeft: 20,
                                                marginTop: 20,
                                                backgroundColor: selectedMenuItem === index ? "#ffffff" : "black",
                                                borderRadius: 10,
                                                flexDirection: "row",
                                                alignItems: "center"
                                            }}

                                        onPress={() => setSelectedMenuItem(index)}

                                    >


                                        <Icon
                                            as="Feather"
                                            name={item.icon}
                                            size={24}
                                            color={selectedMenuItem === index ? "black" : "#ffffff"}
                                            style={{ marginLeft: 15, }}
                                        />


                                        <Text style={{ fontSize: 18, marginLeft: 20, color: "black", fontWeight: "800", color: selectedMenuItem === index ? "black" : "#ffffff" }}>{item.title}</Text>


                                    </TouchableOpacity>

                                )
                            }}

                        />


                    </View>


                </View>




                <Animated.View
                    style={
                        {
                            height: "100%",
                            backgroundColor: "#ffffff",
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            right: 0,
                            transform: [{ scale: scale }, { translateX: moveToRight }],
                            borderRadius: showMenu ? 15 : 0,
                        }}
                >
                    <View style={styles.uberIconAndMenuContainer}  >


                        <View>

                            <Image
                                style={styles.uberIcon}
                                source={
                                    require("../../../assets/Uber.png")
                                }
                            />

                        </View>



                        <TouchableOpacity style={{ position: 'absolute', right: 30 }} onPress={reduceDashboardScreenSize}>


                            <View >
                                <Icon
                                    as="Feather"
                                    name="menu"
                                    size={30}
                                />
                            </View>


                        </TouchableOpacity>


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
                                        fontFamily: 'CircularStdMedium',
                                        fontSize: getARideTextFontSize
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
                                        fontFamily: 'UberMoveBold',
                                        fontSize: sloganTextFontSize
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
                                        fontFamily: 'CircularStdMedium',
                                        fontSize: sloganTextSubtitleFontSize
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
                                        fontFamily: 'UberMoveBold',
                                        fontSize: subtitlePoweredByfontSize
                                    }
                                ]
                            }
                        >
                            Powered By NexaLab.
                        </Text>



                    </View>

                </Animated.View>



            </SafeAreaView>
        </TouchableWithoutFeedback>


    )
}



const styles = StyleSheet.create({


    dashboardContainer: {
        height: "100%",
        backgroundColor: "black",
    },


    uberIconAndMenuContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
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
    },


    sloganTextSubtitle: {
        color: "lightgray",
        marginTop: 35,
        width: "70%",
        textAlign: "center"

    },


    sloganTextPoweredBy: {


        color: "lightgray",
        marginTop: 80,
        width: "75%",
        textAlign: "center"

    }
})
