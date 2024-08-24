import { createSlice} from "@reduxjs/toolkit";
const jobSlice = createSlice (
    {
        name:"job",
        initialState:{
            allJobs:[],
        },
        reducers:{
            setAllJobs:(state,action)
        }
    }
)