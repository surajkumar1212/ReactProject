import React, {useRef, useEffect, useState} from 'react';
import {View, FlatList, TextInput, Text,  Button, StyleSheet, SectionList} from 'react-native'

const DATA = [
    {
        id: '1',
        title: 'Title 1'
    },
    {
        id: '2',
        title: 'Title 2'
    },
    {
        id: '3',
        title: 'Title 3'
    }
]

const SECTIONS = [
    {
       title: 'Section 1',
       data: [{
        id: '1',
        title: 'Item 1'
       },
       {
        id: '2',
        title: 'Item 2'
       }
    ]
    },
    {
        title: 'Section 2',
        data: [{
         id: '3',
         title: 'Item 3'
        },
        {
         id: '4',
         title: 'Item 4'
        }
     ]
     },
     {
        title: 'Section 3',
        data: [{
         id: '5',
         title: 'Item 5'
        },
        {
         id: '6',
         title: 'Item 6'
        },
        {
            id: '7',
            title: 'Item 7'
           }
     ]
     },
     {
        title: 'Section 4',
        data: [{
         id: '5',
         title: 'Item 5'
        },
        {
         id: '6',
         title: 'Item 6'
        },
        {
            id: '7',
            title: 'Item 7'
           }
     ]
     },
     {
        title: 'Section 5',
        data: [{
         id: '5',
         title: 'Item 5'
        },
        {
         id: '6',
         title: 'Item 6'
        },
        {
            id: '7',
            title: 'Item 7'
           }
     ]
     }
]

const Item = ({title}) => {
 return(
    <View style={{backgroundColor: 'pink', marginHorizontal: 20, height: 50, marginVertical: 10}}>
        <Text>{title}</Text>
    </View>
 )
}

const HOC = (WrappedComponent) => {
     const EnhancedComponent = (props) => {
        return(
            <>
            <Text>Enhanced Work!</Text>
            <WrappedComponent {...props} />
            </>
        )
     }

     return EnhancedComponent;
}
const MyComponent = (props) =>{

    return(
       <View>
         <Text>MyComponent</Text>
         <Text>{props.title}</Text>
       </View>
    )  
   }


const MyEnhancedComponent = HOC(MyComponent);


  
  const AdvancedComp = () => {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);
    handleFocus = () => {
       inputRef.current.focus();
    }
    handleBlur = () => {
        inputRef.current.blur();
    }
    useEffect(() => {
        console.log('Effect called')
    },[count])
    return (
      <>
        <FlatList 
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
        <SectionList 
          stickySectionHeadersEnabled={true}
          sections={SECTIONS}
          renderItem={({item}) => <Item title={item.title} />}
          renderSectionHeader={({section}) => {
            return(
                <View style={{height: 30, backgroundColor: 'yellow'}}>
                    <Text>{section.title}</Text>
                </View>
            )
          }}
          keyExtractor={(item) => item.id}
        />
        <TextInput 
           style={{ borderWidth: 1, borderColor: 'grey',backgroundColor: 'white', padding: 10}}
           ref={inputRef}
        />
        <Text>{count}</Text>
        <Button 
        title='Focus'
        onPress={handleFocus}
        />
         <Button 
        title='Blur'
        onPress={handleBlur}
        />
         <Button 
        title='Update Count'
        onPress={() => setCount(count + 1)}
        />
        <MyEnhancedComponent title='My Title' />
      </>
    );
  };

  export default AdvancedComp;

