import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      This is the navigation
      <li>
        <NavLink to="/">Home</NavLink>
        <NavLink  to="/about">About</NavLink>
        <NavLink to="/contact">contact</NavLink>
        <NavLink to="/Product">Product</NavLink>
      </li>
    </div>
  )
}

export default Navbar
