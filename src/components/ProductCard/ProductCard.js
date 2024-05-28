import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './ProductCard.style';

const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.card}>
        <Image source={{uri: product.strMealThumb}} style={styles.image} />
        <Text style={styles.title}>{product.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
