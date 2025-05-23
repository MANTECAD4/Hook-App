import { Link, NavLink } from "react-router"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>

            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink 
                        aria-current="page"
                        className={ 
                            ({isActive}) => (isActive) ? 'nav-link active' : 'nav-link'
                        }
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink 
                        aria-current="page"
                        className={ 
                            ({isActive}) => (isActive) ? 'nav-link active' : 'nav-link'
                        }
                        to="/about"
                    >
                        About
                    </NavLink>
                </li>   

                <li className="nav-item">
                    <NavLink 
                        aria-current="page"
                        className={ 
                            ({isActive}) => (isActive) ? 'nav-link active' : 'nav-link'
                        }
                        to="/login"
                    >
                        Login
                    </NavLink>
                </li>   
            </ul>
            </div>
        </div>
    </nav>
  )
}
