import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const PRODUCTS = [
  {
    id: '1',
    name: 'Smartphone XYZ',
    description: 'O mais novo smartphone com tela de alta definição',
    image: 'https://picsum.photos/id/1015/400/400',
    price: 999.99
  },
  {
    id: '2',
    name: 'Tênis ABC',
    description: 'Tênis esportivo com amortecimento de impacto',
    image: 'https://picsum.photos/id/1025/400/400',
    price: 129.99
  },
  {
    id: '3',
    name: 'Perfume DEF',
    description: 'Fragrância marcante e duradoura',
    image: 'https://picsum.photos/id/1020/400/400',
    price: 59.99
  },
  {
    id: '4',
    name: 'Câmera GHI',
    description: 'Câmera profissional com lente intercambiável',
    image: 'https://picsum.photos/id/1040/400/400',
    price: 1499.99
  },
  {
    id: '5',
    name: 'Notebook JKL',
    description: 'Notebook ultraportátil com bateria de longa duração',
    image: 'https://picsum.photos/id/1050/400/400',
    price: 1899.99
  }
];

export const Home = () => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Produtos em destaque</Text>
      <FlatList
        data={PRODUCTS}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  productItem: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  productPrice: {
    fontSize: 14,
    color: '#666'
  }
});