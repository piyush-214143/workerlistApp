import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import categoriesData from '../utils/categories.json';
import categoryIconMap from '../utils/constants';

const HeaderCategories = ({onCategoryPress}) => {
  const renderCategoryItem = ({item}) => {
    const categoryIcon = categoryIconMap[item.icon];

    return (
      <TouchableOpacity onPress={() => onCategoryPress(item.Worker_Role)}>
        <View style={styles.categoryItem}>
          <Image source={categoryIcon} style={styles.categoryIcon} />
          <Text style={styles.categoryText}>{item.Worker_Role}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categoriesData}
      renderItem={renderCategoryItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryContainer}
    />
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  categoryIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default HeaderCategories;
