import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Weekly from './pages/Weekly'
import Favorites from './pages/Favorites'
import Popular from './pages/Popular'
import NotFound from './pages/NotFound'
import Header from './components/Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Weekly' element={<Weekly/>}/>
        <Route path='/Favorites' element={<Favorites/>}/>
        <Route path='/Popular' element={<Popular/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
