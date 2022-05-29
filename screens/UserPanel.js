import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import search from '../assets/search.png'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const UserPanel = () => {
    const [source, setSource] = useState('')
    const [destination, setDestination] = useState('')
    const [busNumber, setBusNumber] = useState('')
    const [busNumberOption, setBusNumberOption] = useState(false)
    const navigation = useNavigation();

    const searchNumber = (busNumber) => {
        if (busNumber == 53) {
            navigation.navigate('WorliDadar');
        }
        else if (busNumber == 110) {
            navigation.navigate('CollegeStation');
        }
        else {
            alert("Please enter either 53 or 110.")
        }
    }


    return (
        <View style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('LiveLocation')} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 3, backgroundColor: 'black', width: 250, height: 50 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Get Live Location</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => busNumberOption ? setBusNumberOption(false) : setBusNumberOption(true)} style={{ marginTop: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 10, padding: 3, backgroundColor: 'black', width: 250, height: 50 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Search by Bus Number</Text>
            </TouchableOpacity>

            {
                busNumberOption && (
                    <>
                        <TextInput
                            style={{
                                marginTop: 20, paddingLeft: 20, width: 250, height: 50, backgroundColor: '#e1e6ed', borderRadius: 10
                            }}
                            onChangeText={setBusNumber}
                            value={busNumber}
                            placeholder={'Enter bus number'}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                        <TouchableOpacity onPress={() => searchNumber(busNumber)} style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 10, padding: 3, borderColor: 'black', width: 250, height: 50 }}>
                            <Image
                                source={search}
                                style={{ height: 20, width: 20, tintColor: 'black', marginRight: 10 }} />
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Search</Text>
                        </TouchableOpacity>
                    </>
                )
            }

        </View >
    )
}

export default UserPanel