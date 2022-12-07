import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar() {
  const cartobj = useSelector(store => store.cartReducer)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#" id="brand">Ecommerce</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav mx-auto">
  
      <Link to="/"  className="nav-item nav-link active">Home</Link>
   
      <Link to="/additems"  className="nav-item nav-link active">Additems</Link>
    </div>
    <div className="navbar-nav">
   
      <Link to="/cart"  className="nav-item nav-link active">Cart:{cartobj.cartitems.length} </Link>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar