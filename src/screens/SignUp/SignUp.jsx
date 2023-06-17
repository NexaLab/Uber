import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import CustomInput from '../../components/Input/CustomInput';
import CustomButton from '../../components/Button/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateEmailAndPassword } from '../../redux/services/SignupSlice';



export default function SignUp(props) {



    const dispatch = useDispatch();
    const signUpState = useSelector(state => state.signUpSlice);





    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    });






    const onChangeEmail = (value) => {
        setUserDetails({ ...userDetails, email: value })
    }



    const onChangePassword = (value) => {
        setUserDetails({ ...userDetails, password: value })
    }









    const navigation = useNavigation();







    const navigateToSignUpDetails = async () => {

        dispatch(updateEmailAndPassword(userDetails))

        navigation.navigate('SignUpDetails');


    }






    let [fontsLoaded] = useFonts({
        UberMoveBold: require('../../../assets/fonts/UberMoveBold.otf'),
        CircularStdMedium: require('../../../assets/fonts/CircularStd-Medium.otf'),
    });






    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }











    return (

        <SafeAreaView style={styles.signUpContainer}>


            <View style={styles.topBanner} >

                <View style={styles.topBannerInner} >

                    <Text
                        style=
                        {
                            [
                                styles.topBannerText,
                                {
                                    fontFamily: "UberMoveBold"
                                }
                            ]
                        }>
                        UBER
                    </Text>

                </View>

            </View>



            <View style={styles.bottomBanner}>


                <View style={styles.bottomBannerInner} >

                    <CustomInput


                        placeholder={'Email'}
                        icon={'email'}
                        value={userDetails.email}
                        onChangeUserDetails={onChangeEmail}
                    />
                    <CustomInput


                        placeholder={'Password'}
                        icon={'lock'}
                        value={userDetails.password}
                        onChangeUserDetails={onChangePassword}
                    />
                    <CustomButton


                        buttonText={"Next"}
                        fontFamily={'CircularStdMedium'}
                        onPress={navigateToSignUpDetails}
                        width={300}


                    />

                </View>


            </View>


        </SafeAreaView>



    );
}




const styles = StyleSheet.create({


    signUpContainer: {

        height: "100%",
    },


    topBanner: {

        backgroundColor: "white",
        height: "50%",
        borderWidth: 0,

    },


    topBannerInner: {
        borderBottomRightRadius: 80,
        backgroundColor: "black",
        borderWidth: 0,
        height: "100%",
        alignItems: "center",
        justifyContent: "center"

    },


    bottomBanner: {

        backgroundColor: "black",
        height: "50%",
        borderWidth: 0,

    },


    bottomBannerInner: {
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 80,
        borderWidth: 0,
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
    },


    topBannerText: {

        color: "white",
        fontSize: 60
    }



});