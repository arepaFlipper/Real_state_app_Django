import { useState } from 'react'
import Layout from './hocs/Layout'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Listings, ListingDetail, Login, SignUp } from "./containers/";
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/listings' element={<Listings />} />
          <Route exact path='/listings/:id' element={<ListingDetail />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
