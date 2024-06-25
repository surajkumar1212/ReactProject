import {createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchDataFailure, fetchDataStart, fetchDataSuccess } from '../slices/postsslice';


export const fetchData = createAsyncThunk('data/fetchData', async(_,thunkAPI) => {
    try{
        thunkAPI.dispatch(fetchDataStart())
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")

        console.log('OKHTTP ->> Response', response.data)
        thunkAPI.dispatch(fetchDataSuccess(response.data))
        // thunkAPI.dispatch(fetchDataSuccess(null))
    } catch(error){
        console.log('OKHTTP ->> Error', error.message)
        thunkAPI.dispatch(fetchDataFailure(error.message))
    }
})