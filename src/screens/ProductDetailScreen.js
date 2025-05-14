import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { StatusBar } from 'expo-status-bar';
import ProductDetailsHeader from '../components/ProductDetailsHeader';

const ProductDetailScreen = ({route}) => {
    const { product } = route.params;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ProductDetailsHeader />


        <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.description}>{product.description}</Text>



    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container:  {
   flex: 1,
   backgroundColor: Colors.white,
  },

  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
})