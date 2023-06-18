import CustomGooglePlacesAutoComplete from "../../components/GooglePlacesAutoComplete/CustomGooglePlacesAutoComplete";
import Map from "../../components/Map/Map";
import { View } from "react-native";




export default function BookARide() {




    const fetchAddressCoordinates = (latitude, longitude) => {
        console.log(latitude, longitude)
    }





    return (

        <>
            <Map />
            <CustomGooglePlacesAutoComplete placeholderText={"Enter Drop up Location"} fetchAddress={fetchAddressCoordinates} />
        </>


    );

};
