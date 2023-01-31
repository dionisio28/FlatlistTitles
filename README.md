# React Native Lazy Loading FlatList with Random Images and Caching

## Introduction
This code creates a two-column FlatList component in React Native that displays a list of items with random images, lazy loading. Each item in the list includes a title and a unique random image. The images are loaded lazily to improve performance.

## Data
The data for the list is an array of objects, each with a title and an image property:

```
const data = [
  ...Array.from({length: 200}, (_, i) => ({
    title: `title ${i + 1}`,
    image: `https://picsum.photos/200?random=${Math.random()}`,
  }))

 const [listData, setListData] = useState(data.slice(0, 2));
```
In this example, the image property for each item is set to a URL of a random image from picsum.photos with a unique random number as the query parameter to ensure that each image is different.

## List Component
The FlatList component is used to display the list of items:

```
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
    
```
In this example, the renderItem prop is used to define the rendering for each item in the list. The item is passed as a parameter to the renderItem function, and its title and image properties are used to display the title and the image.

The Image component is used to display the image for each item, with the cache prop set to 'only-if-cached' to only load the image from cache if it's already available. If the image is not in the cache, it will be loaded from the network.

The numColumns prop is set to 2 to display two columns in the FlatList. The columnWrapperStyle prop is used to define the spacing between columns.

    
## Column Wrapper Style
The columnWrapper style is used to adjust the spacing between columns:

```
const styles = StyleSheet.create({
  ...,
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
```

In this example, the justifyContent property is set to `'space-between
