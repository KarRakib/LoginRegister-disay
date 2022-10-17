import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    console.log(user)
    const handleSingOut =()=>{
        logOut()
        .then(()=>{

        })
        .catch((error=>{
            console.error(error)
        }))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/' >daisyUI</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Order</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='login'>Log In</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='register'>Register</Link>
                {user?.email && <span>{user.email} </span>}
                 {/* <span>{user.email} </span> */}
               {
                user?.email?
                <button onClick={handleSingOut} className="btn btn-sm">Sing Out</button>:<Link></Link> 
               }
            </div>

        </div>
    );
};

export default Header;