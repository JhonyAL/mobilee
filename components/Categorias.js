import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const CATEGORIES = [
  {
    id: '1',
    title: 'Eletrônicos',
    description: 'Produtos eletrônicos de alta qualidade',
    image: 'https://picsum.photos/id/1/200/300'
  },
  {
    id: '2',
    title: 'Moda',
    description: 'Roupas, calçados e acessórios de moda',
    image: 'https://picsum.photos/id/2/200/300'
  },
  {
    id: '3',
    title: 'Beleza',
    description: 'Produtos de beleza para cuidados pessoais',
    image: 'https://picsum.photos/id/3/200/300'
  },
  {
    id: '4',
    title: 'Esportes',
    description: 'Equipamentos e acessórios esportivos',
    image: 'https://picsum.photos/id/4/200/300'
  },
  {
    id: '5',
    title: 'Casa e Jardim',
    description: 'Produtos para casa e jardinagem',
    image: 'https://picsum.photos/id/5/200/300'
  }
];

export const Categorias = () => {
  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <Text style={styles.categoryDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
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
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 10
  },
  categoryItem: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#f2f2f2',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5
  },
  categoryDescription: {
    fontSize: 14
  }
});