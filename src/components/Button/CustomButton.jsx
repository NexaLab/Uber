import { Button } from '@rneui/themed';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function CustomButton(props) {

    const navigation = useNavigation();
    return (


        <TouchableOpacity
            onPress={props.onPress}
            style=
            {
                [
                    styles.button,
                    {
                        width: props.width,
                        alignSelf: props.alignSelf,
                        marginRight: props.marginRight,
                        marginTop: props.marginTop,
                        display: props.isFocused ? "none" : "flex"
                    }
                ]
            }
        >
            <Text
                style=
                {
                    [
                        styles.buttonText,
                        {
                            fontFamily: props.fontFamily
                        }
                    ]
                }>{props.buttonText}</Text>
        </TouchableOpacity>
    );
}




const styles = StyleSheet.create({

    // container: {
    //     borderRadius: 20, // set the border radius as required
    //     width: '80%', // set the width as required
    //     height: 50, // set the height as required
    // }

    button: {
        backgroundColor: "#09091F",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 10,
        elevation: 5,
        marginBottom: 30,
    },


    buttonText: {
        color: "#ffffff",
        fontSize: 16.5
    }

});