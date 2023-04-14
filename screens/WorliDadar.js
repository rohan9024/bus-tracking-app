import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import pin from "../assets/pin.png"
import bus from "../assets/bus.png"
// import MapViewDirections from 'react-native-maps-directions';
import { doc, onSnapshot } from "firebase/firestore";
import { db } from './firebase';

export default function App() {

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)


    const unsub = onSnapshot(doc(db, "driver", "3YPIokI5C6mD6yu9utE6"), (doc) => {
        setLatitude(doc.data().latitude)
        setLongitude(doc.data().longitude)
    });

    return (
        <View style={styles.container}>

            <MapView style={styles.map}
                loadingEnabled={true}
                region={{
                    longitude: longitude,
                    latitude: latitude,
                    latitudeDelta: 0.300,
                    longitudeDelta: 0.300,
                }}

            >


                <Marker
                    coordinate={{
                        latitude: 19.01692721232519,
                        longitude: 72.82021217419488
                    }}
                    title={"Stop 1"}
                    description={"Worli Village"}
                >
                    <Image
                        source={pin}
                        style={{ height: 30, width: 30 }} />

                </Marker>
                <Marker
                    coordinate={{
                        latitude: 19.016041459137362,
                        longitude: 72.82297085405676
                    }}
                    title={"Stop 2"}
                    description={"Adarsh Nagar Worli"}
                >
                    <Image
                        source={pin}
                        style={{ height: 30, width: 30 }} />

                </Marker>
                <Marker
                    coordinate={{
                        latitude: 19.013980567869705,
                        longitude: 72.82357563940211
                    }}
                    title={"Stop 3"}
                    description={"Babasaheb Worlikar Chowk"}
                >
                    <Image
                        source={pin}
                        style={{ height: 30, width: 30 }} />

                </Marker>
                <Marker
                    coordinate={{
                        latitude: 19.014721010767772,
                        longitude: 72.82630805109417
                    }}
                    title={"Stop 4"}
                    description={"Prabhadevi"}
                >
                    <Image
                        source={pin}
                        style={{ height: 30, width: 30 }} />

                </Marker>
                <Marker
                    coordinate={{
                        latitude: 19.017888423809072,
                        longitude: 72.83154662369725
                    }}
                    title={"Stop 5"}
                    description={"SiddhiVinayak Mandir"}
                >
                    <Image
                        source={pin}
                        style={{ height: 30, width: 30 }} />

                </Marker>
                <Marker
                    coordinate={{
                        latitude: 19.01867409744653,
                        longitude: 72.83365249508746
                    }}
                    title={"Stop 5"}
                    description={"Agar Bazaar"}
                >
                    <Image
                        source={pin}
                        style={{ height: 30, width: 30 }} />

                </Marker>
                <Marker
                    coordinate={{
                        latitude: 19.01983820390244,
                        longitude: 72.83739433271312
                    }}
                    title={"Stop 6"}
                    description={"Prabodhankar Thackeray Chowk"}
                >
                    <Image
                        source={pin}
                        style={{ height: 30, width: 30 }} />

                </Marker>
                <Marker
                    coordinate={{
                        latitude: 19.01976827549303,
                        longitude: 72.8402398697094
                    }}
                    title={"Stop 7"}
                    description={"Hanuman Mandir Dsilva School"}
                >
                    <Image
                        source={pin}
                        style={{ height: 30, width: 30 }} />

                </Marker>
                <Marker
                    coordinate={{
                        latitude: 19.02173037370007,
                        longitude: 72.84222391385191
                    }}
                    title={"Stop 8"}
                    description={"Veer Kotwal Udyan"}
                >
                    <Image
                        source={pin}
                        style={{ height: 30, width: 30 }} />

                </Marker>



                {/* Driver Location */}
                <Marker
                    coordinate={{
                        latitude: latitude,
                        longitude: longitude
                    }}
                    title={"Driver"}
                    description={"Driver's Location"}
                >
                    <Image
                        source={bus}
                        style={{ height: 30, width: 30 }} />

                </Marker>

            </MapView>
        </View>
    );
}

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