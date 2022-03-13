import React from 'react';
import {NavLink} from "react-router-dom";

function TopMenu ( {auth, toggleAuth} ) {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact >Home</NavLink>
                </li>
                {auth ? (
                    <>
                        <li>
                            <NavLink to="/"
                                     onClick={() => toggleAuth(false)}
                            >LogOut</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogposts" >Blogs</NavLink>
                        </li>
                    </>
                ):(
                    <li>
                        <NavLink to="/login" >Login</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default TopMenu;