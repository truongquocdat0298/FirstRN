import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import PawImage from './assets/paw1.png';
import ClothesImage from './assets/clothes.png';
import CouponImage from './assets/coupon.png';
import EntertainImage from './assets/headphones.png';

export default function App() {
  const [categoriesList, setCategoriesList] = useState([
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1', title: 'Pet Shop', imageUri: require('./assets/paw1.png') },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2', title: 'Clothes', imageUri: require('./assets/clothes.png') },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3', title: 'Coupon', imageUri: require('./assets/coupon.png') },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4', title: 'Entertainment', imageUri: require('./assets/headphones.png') },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba5', title: 'Entertainment', imageUri: require('./assets/headphones.png') },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba6', title: 'Entertainment', imageUri: require('./assets/headphones.png') },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7', title: 'Entertainment', imageUri: require('./assets/headphones.png') },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba8', title: 'Entertainment', imageUri: require('./assets/headphones.png') },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba9', title: 'Entertainment', imageUri: require('./assets/headphones.png') },
  ]);

  const renderItem = ({ item }) => (<CategoryListItem title={item.title} imageUri={item.imageUri} />)

  return (
    <View>
      <FlatList contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
        data={categoriesList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});
