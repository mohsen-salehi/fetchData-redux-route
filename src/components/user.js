import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import userAction from "../redux/action/userAction";
import {Link} from "react-router-dom";

function User() {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.users)
  useEffect(()=>{
    dispatch(userAction())
  },[])
  return (
    <div className="col-12 p-4 border d-flex justify-content-between align-content-around flex-wrap">
      {
        user?.map(item => (
          <Link to={`${item?.id}`} key={item?.id} className="col-3 rounded border shadow-sm bg-secondary bg-opacity-10 d-flex justify-content-center align-items-center p-2 text-decoration-none">
            {item.title}
          </Link>
        ))
      }
    </div>
  );
}

export default User;
