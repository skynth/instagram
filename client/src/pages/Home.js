import React from 'react'
//promised-based HTTP client, lets make HTTP requests from browser and handle the transformation of request and response data
import axios from "axios";
import {useEffect, useState} from "react";
//allows us to naviage to different routes
import { useNavigate } from "react-router-dom"

function Home(){

      //list of posts we get from get request
  const[listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate()

  //hook from react runs function when page re-renders. [] indicates when to refresh, empty means once when refresh
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data)
    })
  }, [])

    //returns what will be shown, in this case list of posts
    return ( 
        <div> 
            {listOfPosts.map((value, key) => {
            return (
                <div className="post"
                onClick={() => {
                  navigate(`/post/${value.id}`)
                }}>
                    <div className="title">{value.title}</div>
                    <div className="body">{value.postText}</div>
                    <div className="footer">{value.username}</div>
                </div>
            )
        })}
        </div> 
    )
}

export default Home