
import React, {useEffect, useState} from 'react'

const Stories = (props) =>
{
    const [id, setID] = useState([])
      
    useEffect(()=>{
        let id = props.match.params.storyid
        setID(id)
      },[])

    const post = props.location.state ? (<div><h4 className="center" color= "black">{props.location.state.story_name}</h4>
    <p>{props.location.state.story}</p></div>) : (<p>404: NOT FOUND</p>)

    return(
        <div>
            <div className="container">
                {post}
                
            </div>
        </div>
    )
}

export default Stories