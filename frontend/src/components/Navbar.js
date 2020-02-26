import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                      <Link to='/'>
                          Home
                      </Link>
                    </li>
                    <li>
                    <Link to='/login'>
                        Login
                    </Link>
                  </li>
                  <li>
                  <Link to='/signup'>
                      Signup
                  </Link>
                </li>
                <li>
                <Link to='/logout'>
                    Logout
                </Link>
              </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
