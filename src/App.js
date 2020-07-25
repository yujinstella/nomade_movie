import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'
import Detail from './routes/Detail'
import Navigation from './components/Navigation'


function App() {
  //라우터의 역할   /about -> About.js 로 가. 가야되는 페이지 안내
  return (
    <HashRouter>
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;