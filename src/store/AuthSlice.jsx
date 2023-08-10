import {createSlice} from '@reduxjs/toolkit';


const AuthSlice = createSlice({
    initialState:{
        idToken:"",
        isLoggedin:false
    },
    name:"auth",
    reducers:{
        login:(state,action)=>{
            state.isLoggedin = true;
            state.idToken = action.payload.idToken
        },
        logout:(state)=>{
            state.isLoggedin = false;
            state.idToken = ""
        },
        changePass:(state,action)=>{
            state.idToken = action.payload.idToken
        }
    }
}); 

export const {login , logout ,changePass} = AuthSlice.actions;

export default AuthSlice.reducer;