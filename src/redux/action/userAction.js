import userSlice from "../slice/userSlice";


const {success , failed} = userSlice.actions

const userAction =  () => async (dispatch)  => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data =await res.json()
    dispatch(success(data))
  }catch (e){
    console.log(e)
    dispatch(failed())
  }
}

export default userAction;
