import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import * as Location from 'expo-location';
import { updateProfile } from 'firebase/auth';
import { doc, setDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import MapView from 'react-native-maps';
import pin from "../assets/pin.png"
import bus from "../assets/bus.png"

function DriverPanel() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);

        const driverRef = doc(db, "driver", "3YPIokI5C6mD6yu9utE6");

        await updateDoc(driverRef, {
            latitude: location.coords["latitude"],
            longitude: location.coords["longitude"]
        });

    }

    setTimeout(() => {
        getLocation();
    }, 4);


    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        // text = location;
    }


    return (
        <>

            {location && (
                <View style={styles.container}>

                    <MapView style={styles.map}
                        loadingEnabled={true}
                        region={{
                            latitude: location.coords["latitude"],
                            longitude: location.coords["longitude"],
                            latitudeDelta: 0.300,
                            longitudeDelta: 0.300,
                        }}

                    >
                        {/* Driver Location */}
                        <MapView.Marker
                            coordinate={{
                                latitude: location.coords["latitude"],
                                longitude: location.coords["longitude"]
                            }}
                            title={"Worli Village-Dadar"}
                        >
                            <Image
                                source={bus}
                                style={{ height: 30, width: 30 }} />

                        </MapView.Marker>


                    </MapView>
                </View>

            )}
        </>

    );
}

export default DriverPanel
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});