import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemContext } from 'ThemContext'


const NavBar = ( ) => {
  const { them, setThem } = useContext(ThemContext);
  
  useEffect(() => {
    if (them === "light") {
      document.body.classList.remove("light", "dark")
      localStorage.themChoice = them
      document.body.classList.add(localStorage.themChoice)
    } else {
      document.body.classList.remove("light", "dark")
      localStorage.themChoice = them
      document.body.classList.add(localStorage.themChoice)
    }
  })
  return (
    <nav className="NavBar">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/works'>Works</Link></li>
        <li>
          {them === "light" && <button onClick={() => them === "light" ? setThem("dark") : setThem("light")}> Dark</button>}
          {them === "dark" && <button onClick={() => them === "light" ? setThem("dark") : setThem("light")}> Light</button>}
        </li>
      </ul>
    </nav>


  );
};

export default NavBar;