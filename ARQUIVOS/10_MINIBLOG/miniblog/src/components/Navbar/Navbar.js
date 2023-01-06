import styles from './Navbar.module.css'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Mini Blog <span>React</span></NavLink>
        <ul>
            <li>
                <NavLink to="/" >Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" >Sobre</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar