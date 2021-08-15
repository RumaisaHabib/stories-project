import React, {Component} from 'react'
import Navbar from './Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Stories from './components/Stories'

class App extends Component{
      render(){
        return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/stories/:storyid' component={Stories} />
            </Switch>
          </div>
        </BrowserRouter>
      );
        }
}

export default App;
