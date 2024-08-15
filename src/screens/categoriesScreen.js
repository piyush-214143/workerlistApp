import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
  Text,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import workersData from '../utils/workers.json';
import categoriesData from '../utils/categories.json';
import HeaderCategories from '../components/headerCategories';
import WorkerProfiles from '../components/workerProfile';
import {IMAGE} from '../utils/constants';

const CategoriesScreen = () => {
  const [filteredWorkers, setFilteredWorkers] = useState(workersData);
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleSearch = text => {
    setSearchText(text);
    const filtered = workersData.filter(worker =>
      worker.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredWorkers(filtered);
  };

  const handleCategoryPress = categoryId => {
    const filtered = workersData.filter(
      worker => worker.category === categoryId,
    );
    setFilteredWorkers(filtered);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Image
            source={IMAGE.backIcon}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Categories</Text>
      </View>
      <View style={{padding: 10}}>
        <HeaderCategories onCategoryPress={handleCategoryPress} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search workers..."
          value={searchText}
          onChangeText={handleSearch}
        />
        <Image source={IMAGE.searchIcon} style={styles.searchIcon} />
        <TouchableOpacity onPress={toggleModal} style={styles.filterIcon}>
          <Image source={IMAGE.filterIcon} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <WorkerProfiles workers={filteredWorkers} />
      </View>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={categoriesData}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    handleCategoryPress(item.Worker_Role);
                    toggleModal();
                  }}>
                  <View style={styles.modalItem}>
                    <Text style={styles.modalItemText}>{item.Worker_Role}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
            <TouchableOpacity
              onPress={toggleModal}
              style={styles.closeModalButton}>
              <Text style={styles.closeModalText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0077B5',
    padding: 15,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 130,
  },
  backIcon: {
    height: 20,
    width: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingLeft: 45,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  searchIcon: {
    position: 'absolute',
    left: 20,
    height: 20,
    width: 20,
  },
  filterIcon: {
    marginLeft: 10,
  },
  iconStyle: {
    height: 20,
    width: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalItem: {
    paddingVertical: 10,
  },
  modalItemText: {
    fontSize: 18,
  },
  closeModalButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  closeModalText: {
    color: '#0077B5',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoriesScreen;
