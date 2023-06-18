import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import CustomInput from '../../components/Input/CustomInput';
import CustomButton from '../../components/Button/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { verifyEmailAndPassword } from '../../redux/services/LoginSlice';
import { loginAccount} from '../../redux/services/LoginSlice';




export default function Login(props) {



    const dispatch = useDispatch();
    const loginState = useSelector(state => state.LoginSlice);





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
    

// console.log(loginState)


    const login = async () => {

        const response =  dispatch(verifyEmailAndPassword(userDetails))
        console.log(response)

        dispatch(loginAccount({

            email: response.payload.email,
            password: response.payload.password,
            
        }))

    }






    const navigation = useNavigation();







   






    let [fontsLoaded] = useFonts({
        UberMoveBold: require('../../../assets/fonts/UberMoveBold.otf'),
        CircularStdMedium: require('../../../assets/fonts/CircularStd-Medium.otf'),
    });






    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }











    return (

        <SafeAreaView style={styles.loginContainer}>


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
                    />
                    <CustomButton


                        buttonText={"Login"}
                        fontFamily={'CircularStdMedium'}
                        onPress={login}
                        width={300}


                    />

                </View>


            </View>


        </SafeAreaView>



    );
}




const styles = StyleSheet.create({


    loginContainer: {

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



});