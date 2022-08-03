import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';

const App = props => {
  return (  
    <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
    </Router>
  )
}

export default App