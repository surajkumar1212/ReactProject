import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



const initialData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 1',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 2'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 3'
  },
  {
    id: 'df5b6f87-bfae-4290-81df-5e6d15a8be33',
    title: 'Fourth Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 4'
  },
  {
    id: 'c5b1bdae-dfb1-4fdc-b6c8-9e5293d9b1cb',
    title: 'Fifth Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 5'
  },
  {
    id: 'a3e49ec1-1b1e-4c9b-8c1d-cc1d1eacaf3e',
    title: 'Sixth Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 6'
  },
  {
    id: 'bb1ddae8-8c16-4397-a1f3-ff76d2b96e7b',
    title: 'Seventh Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 7'
  },
  {
    id: '1e7fc9da-fae3-421e-9e3c-736d5c58f63d',
    title: 'Eighth Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 8'
  },
  {
    id: 'd4a2e4b8-5bb5-4b6b-8e4e-6eebc1a7c3d3',
    title: 'Ninth Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 9'
  },
  {
    id: 'f7d1b2a8-9e8c-4c9c-9b8c-e7a1c4f8e3d2',
    title: 'Tenth Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 10'
  },
  {
    id: 'ae6f9e4d-2c6a-4e1d-b8d1-5a6e3f8b1c4e',
    title: 'Eleventh Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 11'
  },
  {
    id: 'bc7e5e1b-9b6c-4b3d-9f6a-1a6e2d4b8f9e',
    title: 'Twelfth Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 12'
  },
  {
    id: 'ac5b6f8e-1d6f-4c7b-9f6d-3e7a1d6e4b8c',
    title: 'Thirteenth Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 13'
  },
  {
    id: 'c7e4a1f6-5d6f-4c1b-8f6d-2b9e3c8e7a1d',
    title: 'Fourteenth Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 14'
  },
  {
    id: 'd1b5c6e8-4a6f-4c9d-8e7d-5e3b1d2a8f9e',
    title: 'Fifteenth Item',
    image: 'https://picsum.photos/id/237/200/300',
    description: 'this is description 15'
  },
];
const Item = ({ title, description, image }) => (
  <View style={styles.item}>
    <Image source={{ uri: image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <TouchableOpacity style={styles.floatingButton}>
      <Icon name="delete" size={16} color="white" />
      </TouchableOpacity>
  </View>
);



function MainScreen({ navigation }) {

  const [data, setData] = useState(initialData);
  const insets = useSafeAreaInsets();

  const removeItem = () => {
    if (data.length > 0) { 
      console.log("Before update:", data);
      const newData = data.slice(0, -1);
      setData(newData);
      console.log("After update:", data);
    }
  }

  return (

    <SafeAreaView style={styles.container}>
      <FlatList
        data={initialData}
        renderItem={({ item }) => <Item title={item.title} description={item.description} image={item.image} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: insets.bottom }} // Adjust bottom padding

        // ListFooterComponent={() => (
        //   <View style={styles.buttonContainer}>
        //     <Button title="Remove Last Item" onPress={removeItem} />
        //   </View>
        // )}
      />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#DBDDDE',
    paddingBottom: 16,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 16,
    alignItems: 'center',
    // Add elevation for Android
    elevation: 5,
    // Add shadow properties for iOS
    shadowColor: '#707679',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  image: {
    width: 120,
    height: 100,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#101B20'
  },
  description: {
    fontSize: 14,
    marginTop: 8,
    color: '#707679',
  },

  floatingButton: {
    // position: 'absolute',
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    right: 16,
    backgroundColor: '#ff6347',
    borderRadius: 10,
    elevation: 8,
  },
});

export default MainScreen;