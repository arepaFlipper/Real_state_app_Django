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
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/listings' component={Listings} />
          <Route exact path='/listings/:id' component={ListingDetail} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Route component={NotFound} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
