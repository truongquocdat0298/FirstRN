import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import PawImage from './assets/paw1.png';
import ClothesImage from './assets/clothes.png';
import CouponImage from './assets/coupon.png';
import EntertainImage from './assets/headphones.png';

export default function App() {
  const [categoriesList, setCategoriesList] = useState([
    {title: 'Pet Shop', imageUri: require('./assets/paw1.png')},
    {title: 'Clothes', imageUri: require('./assets/clothes.png')},
    {title: 'Coupon', imageUri: require('./assets/coupon.png')},
    {title: 'Entertainment', imageUri: require('./assets/headphones.png')},
  ]); 


  return (
    <View style={styles.container}>
      {renderListCategories(categoriesList)}
    </View>
  );
}

function renderListCategories(categoriesList){
  return  categoriesList.map((item, index) => 
    <CategoryListItem key={index} title={item.title} imageUri={item.imageUri}/>
  )
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
