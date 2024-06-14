import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';

//UPDATE -> Props / State change

// class ChildComp extends React.Component {

//     constructor(props){  //1st call
//         super(props);
//         this.state={
//             count: 0,
//             title: 'Child comp title'
//         }
//     }

//     handleIncrement = () => {
//         this.setState({count: this.state.count + 1})
//     }

//     static getDerivedStateFromProps(nextProps, prevState){ //2nd
//         console.log('nextProps', nextProps);
//         console.log('prevState', prevState);
//         if(nextProps.title !== prevState.title){
//             return{
//                 title: nextProps.title
//             }
//         }

//     }

//     componentDidMount(){ //4
//       //called after render method
//       this.setState({title: 'Did mount title'})
//       //API calls
//     }

//     shouldComponentUpdate(nextProps, prevState){
//         return nextProps.title !== this.props.title
//         //true or false
//     }

//     getSnapshotBeforeUpdate(prevProps, prevState){
//         nextProps.title !== this.props.title
//             return{

//             }
        
//     }

//     componentDidUpdate(prevProps, prevState, snapshot){
//         return{
//         }
//     }

//     componentWillUnmount(){
//         //cleanup task
//     }

//     render(){  //3
//         return(
//             <View>
//                 <Text>{this.state.title}</Text>
//                 {/* <Text>HomeScreenClassComp</Text>
//                 <Text>{this.state.count}</Text>
//                 <TouchableOpacity onPress={this.handleIncrement}>
//                     <Text>Update Count</Text>
//                 </TouchableOpacity> */}
//             </View>
//         )
//     }
// }

// class HomeScreenClassComp extends React.Component {

//     constructor(props){  //1st call
//         super(props);
//         this.state={
//             count: 0,
//             title: 'Initial Title'
//         }
//     }

//     handleIncrement = () => {
//         this.setState({count: this.state.count + 1})
//     }

//     changeTitle = () => {
//         this.setState({title: 'New Title'})
//     }

//     static getDerivedStateFromProps(nextProps, prevState){ //2nd
//     }

//     render(){  //3
//         return(
//             <View>
//                 <ChildComp title={this.state.title}/>
//                 <Text>HomeScreenClassComp</Text>
//                 <Text>{this.state.count}</Text>
//                 <TouchableOpacity onPress={this.handleIncrement}>
//                     <Text>Update Count</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={this.changeTitle}>
//                     <Text>Update Title</Text>
//                 </TouchableOpacity>
//             </View>
//         )
//     }
// }



// class HomeScreenClassComp extends React.Component {

// }

const HomeScreenClassComp = () => {
    return(
       <FuncComp3/>   
    )
}
const FuncComp1 = (props) => {  //Reusable Code
    return(
        <View style={{backgroundColor: props.color}}>
            <Text>Common Text</Text>
           {props.children}
        </View>
    )
}
// const FuncComp2 = () => {
//     return(
//         <FuncComp1 color="orange">
//             <Text>
//                 HI All!
//             </Text>
//             <TouchableOpacity>
//                 <Text>jabsdhjjhv</Text>
//             </TouchableOpacity>
//         </FuncComp1>
//     )
// }

const FuncComp3 = () => {
    return(
        <FuncComp1 color="blue">
            <Text>
                HI All! welcome
            </Text>
        </FuncComp1>
    )
}

export default HomeScreenClassComp;

//Mounting
//Updating
//Unmounting