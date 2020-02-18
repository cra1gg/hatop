import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

	return (
		<div>
		<nav className="nav-wrapper black">
		 <ul className="left">
		  <li> <Link to="/Home"> HOME </Link> </li>
		  <li> <Link> CLASSES </Link> </li>
		 </ul>
		</nav>
		</div>

	)
}

export default Navbar;
