import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
//import './home.css'
const Home = () =>
{
    const [stories, setStory] = useState([])
    const getData = async () =>{
        // fetch('http://localhost:8000/api/story/', {mode: 'no-cors'})
        // .then(response => response.json)
        // .then(myStory => {
        //   console.log(Array.from(myStory))
        //   setStory(Array.from(myStory))})

        try {
          const res = await fetch('api/stories/', {mode: 'no-cors'})
          const myStory = await res.json()
          setStory(myStory)
        } catch (e) {
          console.log(e)
      }
      }
      
      useEffect(()=>{
        getData()
      },[])

    return(
        <div className="container">
            <h4 className="center" color="black">Home</h4>
            {stories.map((item)=>
            <div className="row" key={item.id}>    
                <div className="col s8 offset-s2">
                    <div className="card teal darken-2 center">
                        <div className="card-content white-text lighten-2 z-depth-4">
                            <h3 className="card-title" >{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                        <div className="card-action">
                            <Link to={{ 
                                        pathname: "/stories/" + item.id + '/',
                                    }} >READ MORE</Link>
                        </div>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default Home