import { PermissionsAndroid } from "react-native";



function useLocationPermission() {


    const requestLocationPermission = async () => {


        try {


            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "Location Permission",
                    message: "Uber needs the access of your location",
                    buttonNeutral: "Maybe Later",
                    buttonNegative: "Discard",
                    buttonPositive: "Accept"
                }
            )




            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                console.log("Yes you can use the location");

            }


            else {

                console.log("Permission has been denied");

            }
        }


        catch (error) {

            console.log(error)

        }

    }



    return [requestLocationPermission];

}


export default useLocationPermission;