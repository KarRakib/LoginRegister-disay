import React, { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';

const Home = () => {
    const user = useContext(AuthContext)
    console.log(user)

    return (
        <div>
            <h5>This is Home
                {
                    user?.email ?
                        user.email
                        : <p>tooo</p>
                } 
                </h5>
        </div>
    );
};

export default Home;