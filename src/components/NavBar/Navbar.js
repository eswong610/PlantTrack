import React from 'react';
import {Link} from 'react-router-dom'


function Navbar() {
    return (
        <div>
            <header>
                <Link to='/profile'>profile</Link>
                <Link to='/dashboard'>dashboard</Link>
            </header>
        </div>

)
}

export default Navbar
