import React, {useState} from "react";
import MyContext from "./MyContext";

const MyProvider =({children}) => {
    const[data, setData] = useState('Hello All!');
    const[data1, setData1] = useState('Hello All NEW!');

    return(
        <MyContext.Provider value={{data, setData, data1, setData1}}>
            {children}
        </MyContext.Provider>
    )
    

}

export default MyProvider;