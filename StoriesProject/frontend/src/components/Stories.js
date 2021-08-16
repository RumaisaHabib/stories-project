
import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

const Stories = (props) =>
{
    // const [id, setID] = useState([])
      
    // useEffect(()=>{
    //     let id = props.match.params.storyid
    //     setID(id)
    //   },[])

    // const post = props.location.state ? (<div><h4 className="center" color= "black">{props.location.state.story_name}</h4>
    // <p>{props.location.state.story}</p></div>) : (<p>404: NOT FOUND</p>)

    const [myStory, setMyStory] = useState([])
    const [err, setErr] = useState(false)
    const getData = async (location) =>{
        try {
          const path = '../../api'  + location
          console.log(path)
          const res = await fetch(path, {mode: 'no-cors'})
          setErr(res.status === 404 ? (true) : (false))
          const myStory = await res.json()
          setMyStory(myStory)
        } catch (e) {
          setErr(true)
      }
      }
      
      useEffect(()=>{
        const location = window.location.pathname
        getData(location)
      },[])

    const post = myStory ? (<div><h4 className="center" color= "black">{myStory.name}</h4> 
    <p style={{ whiteSpace: 'break-spaces' }}>{myStory.story}</p></div>) : (<p>Loading</p>)
    const err_msg = <div><h4 className="center">404: NOT FOUND</h4></div>
    const content = err ? (err_msg) : (post)

    return(
        <div>
            <div className="container">
                {content}
            </div>
        </div>
    )
}

export default Stories