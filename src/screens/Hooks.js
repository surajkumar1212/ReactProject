import React, {useReducer, useImperativeHandle, useRef, forwardRef, useEffect, useState} from "react";
import { Text, View, Button, TextInput } from "react-native";

function reducer(state, action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
          throw new Error();
    }
}

const CustomTextInput = forwardRef((props, ref)=>{
    const childRef = useRef();

    useImperativeHandle(ref, ()=>({
       childFocus: () => {
        childRef.current.focus();
       },
       childBlur: () =>{
        childRef.current.blur();
       }
    }));

   return(
    <View>
    <TextInput 
      ref={childRef}
      style={{borderColor: 'black', borderWidth: 1, marginHorizontal: 15}}
      placeholder='Enter your text'
    />
    </View>
   )
})

const Hooks = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const [apiData, setApiData] = useState(null);
  const parentRef = useRef();

  useEffect(()=>{
    const fetchData = async() => {
        try{
           const response = await fetch('https://jsonplaceholder.typicode.com/posts');
           const res = await response.json();
           console.log('res', res);
           if(res){
            setApiData(res);
           }

        }catch(err){
            console.log("ERR", err);
        }
    }
     fetchData();
  }, []);
   return(
    <View>
        <Text>Hooks</Text>
        <Text>{state.count}</Text>
        <Button title="Hello Inc Count" onPress={() => dispatch({type: 'increment'})} />
        <Button title="Dec Count" onPress={() => dispatch({type: 'decrement'})}/>
        <CustomTextInput ref={parentRef} />
        <Button title="Focus" onPress={() => parentRef.current.childFocus()} />
        <Button title="Blur" onPress={() =>  parentRef.current.childBlur()} />
    </View>
   )
}

export default Hooks;

//Fetch -> inbuilt
//or axios -> 3rd party