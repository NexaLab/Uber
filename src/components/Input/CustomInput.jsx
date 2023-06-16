import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Icon, Input } from '@rneui/themed';
import { MailOutlined } from "@ant-design/icons"
import { useState } from 'react';



export default function CustomInput(props) {




    return (




        <Input

            value={props.value}
            onChangeText={(text) => props.onChangeUserDetails(text)}
            onFocus={props.handleFocus}
            placeholder={props.placeholder}
            style={styles.input}
            containerStyle=
            {{
                width: 320,

            }}
            leftIcon=
            {
                <Icon

                    name={props.icon}
                    size={20}
                    color='black'
                />
            }

            inputContainerStyle={{
                outline: 'none',
                borderWidth: 1,
                borderColor: 'black',
                borderRadius: 10,
                paddingLeft: 13,
            }}
        />





    );
}




const styles = StyleSheet.create({


    input: {


        marginLeft: 10,
        borderColor: "transparent",
        fontSize: 16
    }


});