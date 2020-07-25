import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About'
import Home from './routes/Home'


function App() {
  //라우터의 역할   /about -> About.js 로 가. 가야되는 페이지 안내
  return (
    <HashRouter>
      <Route path='/' exact={true} component={Home} />
      <Route path='/about' component={About} />
    </HashRouter>
  );
}

export default App;