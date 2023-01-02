import {createSlice} from "@reduxjs/toolkit";

const initialState ={
  status : false ,
  user :[]
}


const success = (state = initialState , action) => {
  state.status = true ;
  state.user = action.payload
}
const failed = (state = initialState , action) => {
  state.status = false ;
}


const userSlice = createSlice({
  name : "users",
  initialState ,
  reducers : {
    success,
    failed
  }
})

export default userSlice ;
