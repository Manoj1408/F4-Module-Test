import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/action/post.actions";
import { useNavigate } from "react-router-dom";

export default function Allposts() {
   let loading = useSelector((state) => state.loading);
   let data = useSelector((state) => state.data);
   let error = useSelector((state) => state.error);

   const navigate = useNavigate();

   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchData());
   }, []);


   if (loading) {
     return <div class="loader"></div>;
   }

   if (error) {
     return <h1>{error}</h1>;
   }
   return (
     <div>
       <h1>Post List</h1>
       <div className="cards">
         {data.map((post) => (
           <div
             onClick={() => {
               navigate(`/F4-Module-Test/item/${post.id}`);
             }}
             className="card"
             key={post.id}
           >
             <img src={`https://picsum.photos/200?random=${post.id}`} alt="" />
             <p>UserId : {post.userId}</p>
             <p>Title : {post.title.slice(0, 10)}</p>
             <p>Body : {post.body.slice(0, 80)}</p>
             <span>Read more....</span>
           </div>
         ))}
       </div>
     </div>
   ); 
}
