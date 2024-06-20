import React, {useState, useEffect, useCallback, useRef, useMemo, forwardRef, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native'
import MyContext from '../context/MyContext';
import { useNavigation } from '@react-navigation/native';

// const CustomTextInput = forwardRef((props, ref)=>(
//     <View>
//         <TextInput 
//           ref={ref}
//           style={{borderColor: 'grey', borderWidth: 1, marginHorizontal: 15}}
//           placeholder='Enter your text'
//         />
//     </View>
// )) //Child comp


const CustomTextInput = ({data}) =>{
    console.log("Child rendered");
   return(
    <View>
      <Text>{data}</Text>
    </View>
   )
}; //Child comp

const MemoizedTextComp = React.memo(CustomTextInput);  //Memoizing the component

function ForwardRef() {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);
    const {data, setData, data1} = useContext(MyContext);
    const navigation = useNavigation();
    console.log("Parent rendered");
    const handleFocusInput = () => {
     if(inputRef.current){
        console.log('inputRef.current1', inputRef.current);
        inputRef.current.focus();
     }
    }

    const handleBlurInput = () => {
        if(inputRef.current){
            console.log('inputRef.current2', inputRef.current);
            inputRef.current.blur();
         }
    }
    // const updateCount = () => {
    //     setCount(count + 1);
    // }

    const updateCount = useCallback(()=>{  //Memoizing the function
        setCount(count + 1);
    }, []);

    const value = useMemo(()=>{   //Memoizing the value
        let res = 0;
        for(let i = 0; i<10; i++){
            res+=i;
        }
        return res;
    }, []);



    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.textStyle}>ForwardRef</Text>
        <MemoizedTextComp data='static text'/>
        {/* <CustomTextInput  data='static text'/> */}
        <Button title='Update Count' onPress={updateCount}/>
        <Text>{count}</Text>
        <Text>{value}</Text>
        <Text>{data}</Text>
        <Text>{data1}</Text>
        {/* <CustomTextInput ref={inputRef} />
        <Button title='FocusInput' onPress={handleFocusInput}/>
        <Button title='BlurInput' onPress={handleBlurInput}/> */}
         <Button title='New Data' onPress={()=>setData('New updated data from context')}/>
         <Button title='Go To Next Screen' onPress={()=>navigation.navigate('Home')}/>
      </View>
    );
  }

  export default ForwardRef;

const styles = StyleSheet.create({

})

