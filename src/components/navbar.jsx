import style from './navbar.module.css'; 

function Navbar() {
  return (
    <header>
      <div className={style.container}>
          <nav className={style.navbar}> 
            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className={style.authContainer}>
            <a href="#" className="login">
              Log in
            </a>
            <a href="#" className="register">
              Register
            </a>
          </div>
         
        </div>
    </header>
  );
}

export default Navbar
