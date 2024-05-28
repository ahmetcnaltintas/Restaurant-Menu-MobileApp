import {SafeAreaView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';

const Product = ({route, navigation}) => {
  const {categoryName} = route.params;
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
        );
        setProductData(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [categoryName]);

  const handleProductDetail = item => {
    navigation.navigate('Detail', {item});
  };
  const renderItem = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductDetail(item)} />
  );
  return (
    <SafeAreaView>
      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={item => item.idMeal}
      />
    </SafeAreaView>
  );
};

export default Product;
