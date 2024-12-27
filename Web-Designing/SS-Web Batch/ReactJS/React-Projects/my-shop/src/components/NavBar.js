import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import Dark from '../dark.svg';
import Light from '../light.svg';

export default function NavBar() {
  const {theme, setTheme} = useContext(ThemeContext);
  console.log(theme);

  let themeStyle = {};

  if (theme === 'light'){
    themeStyle = {
      background: 'white',
      color: '#333'
    }
  }else{
    themeStyle = {
      background: '#333',
      color: '#fff'
    }
  }
  
  return (
    <nav style={themeStyle}>
          <h1>My-Shop</h1>
          <div className='spacer'></div>
          <NavLink to={'\home'} >Home</NavLink>
          <NavLink to={'\contact'}>Contact Us</NavLink>
          <NavLink to={'\products'}>Products</NavLink>
          {
            theme === 'light' ?
            <img src={Dark} alt="Dark Mode" style={ {width: '20px', cursor:'pointer'}} onClick={()=> setTheme('dark')}/> :
            <img src={Light} alt="Light Mode" style={ {width: '20px', cursor:'pointer'}} onClick={()=> setTheme('light')}/>
          }
        </nav>
  )
}
