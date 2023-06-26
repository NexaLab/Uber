import CustomGooglePlacesAutoComplete from "../../components/GooglePlacesAutoComplete/CustomGooglePlacesAutoComplete";
import Map from "../../components/Map/Map";
import { View } from "react-native";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";




export default function BookARide() {




    const [pickAndDropState, setPickAndDropState] = useState({

        pickUpCoordinates: {},


        dropUpCoordinates: {
            latitude: null,
            longitude: null
        }
    });



    const { pickUpCoordinates, dropUpCoordinates } = pickAndDropState;





    const fetchDropUpCoordinates = (latitude, longitude) => {
        setPickAndDropState({
            ...pickAndDropState, dropUpCoordinates: {
                latitude: latitude,
                longitude: longitude
            }
        })
    }




    return (

        <>
            <Map dropUpCoordinates={dropUpCoordinates} />
            <CustomGooglePlacesAutoComplete placeholderText={"Enter Drop up Location"} fetchDropUp={fetchDropUpCoordinates} />
            <Footer />
        </>


    );

};
