import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native'
// import { useNavigation } from '@react-navigation/native';

const Greetings = (props) => {
    return(
        <View>
            <Text>Hello!, {props.name}</Text>
        </View>
    )
}

function HomeScreenMain() {
    const [data, setData] = useState(true);
    const [count, updateCount] = useState(0);

    useEffect(()=>{
      console.log('Mounted')
    const interval = setInterval(()=> {
       updateCount(count + 1)
    }, 1000)

      return () => {
        console.log('Mounted')
        clearInterval(interval);
        //unmounting
      }
    },[data, count]);

    //a ? b : c //Ternary operator

    return (
    <>
      <View style={styles.mainView}>
        <Text style={styles.textStyle}>{count}</Text>
        <View style={[styles.box, Platform.OS === 'ios' ? {backgroundColor: 'blue', flex: 0.25} : {}]} />
        <View style={[styles.box, {backgroundColor: 'red', flex: 0.25}]} />
        <View style={[styles.box, {backgroundColor: 'green', flex: 0.25}]} />
        <View style={[styles.box, {backgroundColor: 'yellow', flex: 0.25}]} />
        <Greetings name="Neha" />
      </View>
      {
        data ? ( <TouchableOpacity onPress={()=>{setData(!data)}} style={{height: 30, width: 60, backgroundColor: 'red'}}>
        <Text>Click Here!</Text>
      </TouchableOpacity>) : 
      (
        <TouchableOpacity  onPress={()=>{setData(!data)}} style={{height: 30, width: 60, backgroundColor: 'orange'}}>
        <Text>Press Here!</Text>
      </TouchableOpacity>
      )
      } 
      </>
    );
  }

  export default HomeScreenMain;

const styles = StyleSheet.create({
mainView: {
    marginHorizontal: 20,
    marginVertical: 50,
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white'
},
textStyle: {
    textAlign: 'center'
},
box: {
    height: 50,
    width: 50,
    backgroundColor: 'pink',
    margin: 10
}
})

