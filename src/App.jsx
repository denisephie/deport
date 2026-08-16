import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Drinkies from './pages/Drinkies'
import Portfolio from './pages/Portfolio'
/* BrowserRouter tracks URL, see which comps shd be rendered based on path
Routes enable nav & display diff comps based on url path w/o reload
Route maps specific web address URL to specific UI comp */

function App() {
  return ( /* wrap for a continuous return up until the end of parentheses */
    <BrowserRouter>
      <div className="min-h-screen bg-bg">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path= "/drinkies" element={<Drinkies />} />
          <Route path= "/portfolio" element={<Portfolio />} />
          <Route path="*" element={<h1 className="text-ink">nothing brewing at the moment..</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App


/* oops basically BrowserRouter wraps entire comp
Routes is the child of BR, parent wrapper of indiv Route
Route is the child of Routes, indiv mapping to UI comps 

also, * has the lowest priority catch in react's router, 
that's why its used to catch url errors */