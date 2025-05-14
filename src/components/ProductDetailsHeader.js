import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProductDetailsHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Ionicons name="chevron-back" size={30} color="black" />
            </TouchableOpacity>
            <Ionicons name="heart-outline" size={30} color="black" />
        </View>
    )
}

export default ProductDetailsHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 30,
    }
})