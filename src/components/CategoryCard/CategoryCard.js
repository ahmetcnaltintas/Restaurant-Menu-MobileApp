import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './CategoryCard.style';

const CategoryCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: product.strCategoryThumb}} />
        <View style={styles.body_container}>
          <Text style={styles.title}>{product.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryCard;
