import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const CustomCarousel = ({ categories, onCategoryPress }) => {
  const renderCarouselItem = ({ item }) => (
    <TouchableOpacity onPress={() => onCategoryPress(item.name)}>
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.carouselImage} resizeMode="center"/>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.carouselContainer}>
      {categories.map((category) => renderCarouselItem({ item: category }))}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  carouselItem: {
    marginRight: 20,
  },
  carouselImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ddd', // Add background color to make the circular image stand out
  },
});

export default CustomCarousel;
