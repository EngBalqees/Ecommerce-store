import { Link } from 'react-router-dom';
import style from './navbar.module.css';

function Navbar() {
  return (
    <header>
      <div className={style.container}>
        <nav className={style.navbar}>
          <ul>
            <li>
              <Link to ="/home" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to ="">Categories</Link>
            </li>
            <li>
            <Link to ="">Products</Link>
            </li>
            <li>
            <Link to ="">Cart</Link>
            </li>
            <li>
            <Link to ="">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={style.authContainer}>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>

      </div>
    </header>
  )
}

export default Navbar
