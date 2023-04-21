import { ToastAndroid, StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import CustomInput from '../../components/Input/CustomInput';
import CustomButton from '../../components/Button/CustomButton';
import { Avatar } from '@rneui/themed';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { useSelector, useDispatch } from 'react-redux';
import { createAccount, updatePhoneNoAndCountryAndCity } from '../../redux/services/SignupSlice';





export default function SignUpDetails(props) {



    const dispatch = useDispatch();
    const signUpState = useSelector(state => state.signUpSlice);




    const [profilePic, setProfilePic] = useState(null);

    const [isFocused, setIsFocused] = useState(false);

    const [userDetails, setUserDetails] = useState({
        phoneNo: "",
        country: "",
        city: "",
    });








    const onChangePhoneNo = (value) => {
        setUserDetails({ ...userDetails, phoneNo: value })
    }





    const onChangeCountry = (value) => {
        setUserDetails({ ...userDetails, country: value })
    }





    const onChangeCity = (value) => {
        setUserDetails({ ...userDetails, city: value })
    }







    const handleFocus = () => {
        setIsFocused(true);
    };









    const avoidKeyBoard = () => {

        Keyboard.dismiss();
        setIsFocused(false);
    }








    const showToastFunc = (message) => {
        Toast.show({
            type: 'error',
            text1: 'Bug!',
            text2: 'Reload the app',
            position: 'top',
            visibilityTime: 5000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        });
    };








    const selectProfilePic = async () => {



        try {



            const result = await DocumentPicker.getDocumentAsync({
                type: 'image/*',
                copyToCacheDirectory: false,
            });



            if (result.type === 'success') {

                setProfilePic(result.uri);

            }

        }


        catch (error) {

            showToastFunc("Reload the app")
            console.log(error);

        }


    }







    const signUp = async () => {

        const response = dispatch(updatePhoneNoAndCountryAndCity(userDetails));
        dispatch(createAccount({

            email: signUpState.data.email,
            password: signUpState.data.password,
            phoneNo: response.payload.phoneNo,
            country: response.payload.country,
            city: response.payload.city

        }))

    }








    let [fontsLoaded] = useFonts({
        UberMoveBold: require('../../../assets/fonts/UberMoveBold.otf'),
        CircularStdMedium: require('../../../assets/fonts/CircularStd-Medium.otf'),
    });








    if (!fontsLoaded) {
        return <Text>Loading...</Text>;
    }








    return (

        <TouchableWithoutFeedback onPress={avoidKeyBoard}>
            <View style={styles.signUpDetailsContainer} >
                <Avatar

                    size={200}
                    rounded
                    source={{ uri: profilePic == null ? "https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg" : profilePic }}
                    containerStyle=
                    {
                        {
                            marginBottom: 50,
                            display: isFocused ? "none" : "flex"
                        }
                    }
                />


                <CustomButton

                    buttonText={"Upload Image"}
                    fontFamily={'CircularStdMedium'}
                    onPress={selectProfilePic}
                    width={300}
                    isFocused={isFocused}

                />


                <CustomInput

                    handleFocus={handleFocus}
                    placeholder={'Phone No'}
                    icon={'phone'}
                    value={userDetails.phoneNo}
                    onChangeUserDetails={onChangePhoneNo}

                />
                <CustomInput

                    handleFocus={handleFocus}
                    placeholder={'Country'}
                    icon={'map'}
                    value={userDetails.country}
                    onChangeUserDetails={onChangeCountry}

                />
                <CustomInput

                    handleFocus={handleFocus}
                    placeholder={'City'}
                    icon={'map'}
                    value={userDetails.city}
                    onChangeUserDetails={onChangeCity}

                />


                <CustomButton

                    buttonText={"Sign up"}
                    fontFamily={'CircularStdMedium'}
                    width={115}
                    alignSelf={"flex-end"}
                    marginRight={40}
                    marginTop={25}
                    onPress={signUp}

                />


                <Text style={{ color: "lightgray", width: "80%", marginTop: 10, fontSize: 11, }}>
                    You have a valid driver's license if you want to use Uber as a driver.
                </Text>

                <Toast />

            </View>
        </TouchableWithoutFeedback>

    );
}




const styles = StyleSheet.create({

    signUpDetailsContainer: {
        display: "flex",
        borderWidth: 1,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",


    },


    // bottomSignUpDetails: {
    //     display: "flex",
    //     flexDirection: "column",
    //     borderColor: "purple",
    //     borderWidth: 2,
    //     height: 80,
    //     width: "90%",
    //     marginTop: 30,
    //     alignItems: "center",
    //     justifyContent: "center"
    // }

});