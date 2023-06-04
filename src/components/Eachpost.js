import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Eachpost() {
  let data = useSelector((state) => state.data);
  const { id } = useParams();
  return (

    <>
    <h2>Details Page For Post with ID:{id}</h2>
      {data.map((post) => {
        if (post.id == id)
          return (
            <div className="eachcard" key={post.id}>
              <img src={`https://picsum.photos/200?random=${post.id}`} alt="" />
              <p>UserId : {post.userId}</p>
              <p>Title : {post.title}</p>
              <p>Body : {post.body}</p>
            </div>
          );})}
    </>
  );
}
