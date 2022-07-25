import React, { useEffect, useState } from 'react'
//hook that lets us access data params
import { useParams } from "react-router-dom"
import axios from "axios";

function Post() {
    let{ id } = useParams()
    //create state that holds data
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("")

    //get the relevent post
    useEffect(() => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            setPostObject(response.data)
        })
    })
    //get all comments related to relevent post
    useEffect(() => {
        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            setComments(response.data)
        })
    }, []) //need empty array so it doesnt call the request every second and only runs once
    
    const addComment = () => {
        //get what newComment has via the onChange when the button is clicked, postid we already got from viewing post
        axios.post("http://localhost:3001/comments", {
            commentBody: newComment, 
            PostId: id
        })
        .then((response) => { //automatically updates, adds new comment within action
            const commentToAdd = {commentBody: newComment}
            setComments([...comments, commentToAdd])
            newComment("")
        }
        )
    }

    //make and return the post
    //onChange event holds the value of what is typed in the comment area
  return (
    <div className="postPage">
        <div className = "leftSide">
            <div className = "post" id = "individual">
                <div className="title"> {postObject.title}</div>
                <div className="body"> {postObject.postText}</div>
                <div className="footer"> {postObject.username}</div>
            </div>
        </div>
        <div className = "rightSide">
            <div className="addCommentContainer">
                <input type="text" placeholder="Comment..." value={newComment} onChange={(event) => {setNewComment(event.target.value)}}/>
                <button onClick={addComment}> Add Comment </button>
            </div>
            <div className = "listOfComments">
               {comments.map((comment,key) => {
                    return <div className="comment"> {comment.commentBody}</div>
               })} 
            </div>
        </div>
    </div>
  )
}

export default Post