import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import CategoryCard from '../../components/CategoryCard';
import axios from 'axios';

const Category = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/categories.php',
        );
        setData(response.data.categories);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePressDetail = categoryName => {
    navigation.navigate('Product', {categoryName});
  };

  const renderItem = ({item}) => (
    <CategoryCard
      product={item}
      onSelect={() => handlePressDetail(item.strCategory)}
    />
  );

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Category;
