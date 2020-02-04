import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './styles/main.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Gods from './components/gods/Gods'
import GodShow from './components/gods/GodShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'


class App extends React.Component {


  render() {
    return (

      <BrowserRouter>
        <main>
          <Navbar/>
          <Switch>
            <Route path="/gods/:id" component={GodShow}/>
            <Route path="/gods" component={Gods}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        </main>
      </BrowserRouter>
      
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)