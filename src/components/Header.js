import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/Weekly'>Weekly</Link>
        <Link to='/Favorites'>Favorites</Link>
        <Link to='/Popular'>Popular</Link>
      </nav>
    </header>
  )
}

export default Header