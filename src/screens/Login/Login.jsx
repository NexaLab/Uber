import { View, StyleSheet, Text,SafeAreaView } from "react-native";
import { useFonts } from 'expo-font';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/Button/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from "axios";
import { updateEmailAndPassword } from "../../redux/services/LoginSlice";

// import { useDispatch, useSelector } from 'react-redux';
// import { updateEmailAndPassword } from '../../redux/services/SignupSlice';


export default function Login(props){

    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginSlice);
    console.log(loginState)
    


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

    


    const handleLogin = async() => {
        dispatch(updateEmailAndPassword(userDetails))
    }





    // const navigateToSignUpDetails = async () => {

    //     dispatch(updateEmailAndPassword(userDetails))

    //     navigation.navigate('SignUpDetails');
    // }

    let [fontsLoaded] = useFonts({
        UberMoveBold: require('../../../assets/fonts/UberMoveBold.otf'),
        CircularStdMedium: require('../../../assets/fonts/CircularStd-Medium.otf'),
    });

    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }

    return (

        <View style={styles.signUpContainer}>

            <View style={styles.topBanner} >
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
                        secureTextEntry
                    />
                    <CustomButton
                        buttonText={"Login"}
                        fontFamily={'CircularStdMedium'}
                        width={300}
                        onPress={handleLogin}
                    />
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    signUpContainer: {

        height: "100%",
    },

    topBanner: {

        backgroundColor: "black",
        height: "50%",
        borderWidth: 0,
        borderBottomRightRadius: 80,
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
})