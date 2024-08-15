import React, {useState} from 'react';
import {View, TextInput, StyleSheet, LinearGradient} from 'react-native';
import HeaderCategories from './HeaderCategories';

const Header = ({onSearch}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = text => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#3498db', '#8e44ad']}
        style={styles.gradientBackground}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search workers..."
          value={searchText}
          onChangeText={handleSearch}
        />
        <HeaderCategories />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  gradientBackground: {
    padding: 10,
    borderRadius: 10,
  },
  searchBar: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default Header;
