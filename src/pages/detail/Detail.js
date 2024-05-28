import {SafeAreaView, Text, Image} from 'react-native';
import styles from './Detail.style';
import React, {useEffect} from 'react';
import axios from 'axios';

const Detail = ({route}) => {
  const {item} = route.params;
  console.log(item);
  const {idMeal, strMeal, strMealThumb} = item;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [idMeal]);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: strMealThumb}} />
      <Text style={styles.text}>{strMeal}</Text>
    </SafeAreaView>
  );
};

export default Detail;
