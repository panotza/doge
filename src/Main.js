import React from 'react'
import { Switch, Route } from 'react-router-dom'

const Home = () => <div>This is Home</div>
const About = () => <div>This is About</div>
const Contact = () => <div>This is Contact</div>

const Main = () => {
  return (
    <Switch>
      <Route exact path='/doge' component={Home} />
      <Route path='/doge/about' component={About} />
      <Route path='/doge/contact' component={Contact} />
    </Switch>
  )
}

export default Main
