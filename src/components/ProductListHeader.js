// src/components/ProductHeader.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ProductHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>🛒 Product Listing</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
  
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.black,
    letterSpacing: 1,
    textAlign: 'center',
    top: 30,
  },
});

export default ProductHeader;
