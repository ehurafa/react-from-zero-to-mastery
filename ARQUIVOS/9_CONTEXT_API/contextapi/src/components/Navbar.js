import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <Link to="/pagea">Page A</Link>
        <Link to="/pageb">Page B</Link>
        <Link to="/pagec">Page C</Link>
    </nav>
  )
}

export default Navbar