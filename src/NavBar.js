import {Link, useMatch, useResolvedPath } from "react-router-dom"
// import { onAuthStateChanged, getAuth } from 'firebase/auth';
// import { useEffect, useState } from 'react';

export default function Navbar() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect(() => {
    //     const auth = getAuth();
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //       setIsLoggedIn(!!user); 
    //     });
    
       
    //     return () => unsubscribe();
    //   }, []);

    return <nav className="nav">
        <Link to="/" class-name="site-title">Aroma Delicioasa</Link>
        <ul>
            <CustomLink to="/meniu">Meniu</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            {/* {isLoggedIn && <CustomLink to="/specialPage">Special Page</CustomLink>}
            {!isLoggedIn && <CustomLink to="/signupform">Sign Up</CustomLink>} */}
            <CustomLink to="/signupform">Sign Up</CustomLink>
        </ul>
    </nav>
}

function CustomLink ({to, children, ...props}) {
    
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end:true })
    return (
    <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
    </li>
    )
}