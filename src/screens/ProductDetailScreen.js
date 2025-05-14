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

       <View style={styles.productContainer}> 
        <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.description}>{product.description}</Text>
      </View>



    </View>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  container:  {
   flex: 1,
   backgroundColor: Colors.white,
   
  },

  productContainer: {
    paddingHorizontal: 15
  },

    image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 20,
    marginTop: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginTop: 15
   
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 6
  },
  category: {
    fontSize: 18,
    color: '#555',
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    color: '#777',
    lineHeight: 22,
    marginTop: 10,
  },

})