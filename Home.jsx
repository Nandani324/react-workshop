
import {useEffect, useState} from "react"
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import axios from "axios";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [Blogs,SetBlogs]=useState([])
  async function fetchBlogs()
  {
 const response=await axios.get("https://687af36cabb83744b7ee4775.mockapi.io/Blogs")
 console.log(response.data)
 if(response.status==200){
  SetBlogs(response.data)
 }else{
  alert("Error Aayo hai!")
 }
  }
  useEffect(()=>{
    fetchBlogs()

  },[])
  return (
    <>
    <Navbar/>
    <div className="flex  justify-between flex-wrap p-5 gap-4">
        {Blogs.map(function(Blog){
          return(
        <Card key={Blog.id} Blogs={Blog}/>
  )
  })}
  
    </div>
</>
  );
}

export default Home;