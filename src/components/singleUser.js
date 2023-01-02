import React, {useEffect} from 'react';
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import userAction from "../redux/action/userAction";

function SingleUser() {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.users)


  useEffect(()=>{
    dispatch(userAction())
  },[])




  const {id} = useParams()
  const data = user.filter(item => item.id === Number(id))

  return (
    <div className="col-12 border p-2 d-flex flex-wrap">
       this id : {id}
      {
        data?.map(item => (
          <div key={item.id} className="col-12">
            {item?.body}
          </div>
        ))
      }
    </div>
  );
}

export default SingleUser;
