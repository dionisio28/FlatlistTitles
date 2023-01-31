import React, {useState} from 'react';
import {Image, FlatList, StyleSheet, Text, View} from 'react-native';

const Item = ({title, image}: {title: string; image: string}) => (
  <View style={styles.itemContainer}>
    <Image style={styles.itemImage} source={{uri: image}} />
    <Text style={styles.itemTitle}>{title}</Text>
  </View>
);

const data = [
  ...Array.from({length: 200}, (_, i) => ({
    title: `title ${i + 1}`,
    image: `https://picsum.photos/200?random=${Math.random()}`,
  })),
];

const App = () => {
  const [listData, setListData] = useState(data.slice(0, 2));

  return (
    <FlatList
      data={listData}
      renderItem={({item}) => <Item title={item.title} image={item.image} />}
      keyExtractor={(item, index) => index.toString()}
      onEndReachedThreshold={0.5}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      onEndReached={() => {
        setListData(prevListData => [
          ...prevListData,
          ...data.slice(prevListData.length, prevListData.length + 2),
        ]);
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    flexDirection: 'row',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  itemTitle: {
    fontSize: 18,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default App;
